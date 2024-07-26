import React, { useState, useEffect, useRef } from "react";
import gallery_bg from "../Assets/Gallery-bg.jpg";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("cookies");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const lightBoxImgRef = useRef(null);
  const lightBoxPhotographerRef = useRef(null);
  const lightBoxRef = useRef(null);
  const downloadImgBtnRef = useRef(null);

  const apiKey = "yRDvXgBErUcONLzaq8i1bRoCMxxw7besUdAPHys1mWV9G7k6vulOcTsP";
  const perPage = 15;

  const fetchImages = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        headers: { Authorization: apiKey },
      });
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...(data.photos || [])]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(
      `https://api.pexels.com/v1/search?query=${searchQuery}&page=${currentPage}&per_page=${perPage}`
    );
  }, [currentPage, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyUp = (e) => {
    if (e.key === "Enter") {
      setImages([]);
      setCurrentPage(1);
    }
  };

  const loadMoreImages = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const downloadImg = (imgURL) => {
    fetch(imgURL)
      .then((res) => res.blob())
      .then((file) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();
      })
      .catch(() => alert("Failed to download image."));
  };

  const showLightbox = (img, name) => {
    if (lightBoxImgRef.current) {
      lightBoxImgRef.current.src = img;
    }
    if (lightBoxPhotographerRef.current) {
      lightBoxPhotographerRef.current.innerText = name;
    }
    if (downloadImgBtnRef.current) {
      downloadImgBtnRef.current.setAttribute("data-img", img);
    }
    if (lightBoxRef.current) {
      lightBoxRef.current.classList.add("show");
    }
    document.body.style.overflow = "hidden";
  };

  const hideLightbox = () => {
    if (lightBoxRef.current) {
      lightBoxRef.current.classList.remove("show");
    }
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="lightbox" ref={lightBoxRef}>
        <div className="wraper">
          <header>
            <div className="photographer">
              <i className="uil uil-camera"></i>
              <span ref={lightBoxPhotographerRef}></span>
            </div>
            <div className="buttons">
              <i
                className="uil uil-import"
                ref={downloadImgBtnRef}
                onClick={() =>
                  downloadImg(
                    downloadImgBtnRef.current.getAttribute("data-img")
                  )
                }
              ></i>
              <i className="uil uil-times" onClick={hideLightbox}></i>
            </div>
          </header>
          <div className="preview-img">
            <div className="img">
              <img src="" alt="" ref={lightBoxImgRef} />
            </div>
          </div>
        </div>
      </div>
      <section className="search-1">
        <img src={gallery_bg} alt="" />
        <div className="contents">
          <h1>Bakerz Gallery</h1>
          <p>Search and download any images within a second</p>
          <div className="search-box">
            <i className="uil uil-search"></i>
            <input
              type="text"
              placeholder="Search images"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyUp={handleSearchKeyUp}
            />
          </div>
        </div>
      </section>
      <section className="gallery">
        <ul className="images">
          {images.map((img, index) => (
            <li
              key={index}
              className="card"
              onClick={() => showLightbox(img.src.large2x, img.photographer)}
            >
              <img src={img.src.large2x} alt="" />
              <div className="details">
                <div className="photographer">
                  <i className="uil uil-camera"></i>
                  <span>{img.photographer}</span>
                </div>
                <button
                  className="download-btn"
                  data-img={img.src.large2x}
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadImg(img.src.large2x);
                  }}
                >
                  <i className="uil uil-import"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="load-more"
          onClick={loadMoreImages}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </section>
    </div>
  );
};

export default Gallery;
