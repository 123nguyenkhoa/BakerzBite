import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import allProducts from "../Assets/all_product";
import "./Comparison.css";

const Comparison = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentProduct, comparedProducts } = location.state || {};

  const [products, setProducts] = useState([
    currentProduct,
    ...comparedProducts,
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(null);

  if (!currentProduct || !comparedProducts || comparedProducts.length === 0) {
    return <p>No products to compare.</p>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageClick = (index) => {
    setSelectedColumnIndex(index);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleReplaceProduct = (newProduct) => {
    const updatedProducts = [...products];
    updatedProducts[selectedColumnIndex] = newProduct;
    setProducts(updatedProducts);
    setShowPopup(false);
  };

  const getProductsInCategory = (category) => {
    return allProducts.filter(
      (p) =>
        p.category === category &&
        !products.some((product) => product.id === p.id)
    );
  };

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/jpeg"));
      };
      img.onerror = reject;
    });
  };

  const generatePDF = async () => {
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "landscape",
    });

    doc.text("Product Comparison", 14, 14);

    const tableColumn = ["Feature", ...products.map((product) => product.name)];
    const tableRows = [];

    // Fetch image data
    const imagePromises = products.map((product) => loadImage(product.image));
    const imageData = await Promise.all(imagePromises);

    // Construct table data
    tableRows.push([
      "Image",
      ...imageData.map((dataUrl) => ({
        image: dataUrl,
        width: 60,
        height: 60,
      })),
    ]);
    tableRows.push([
      "Description",
      ...products.map((product) => product.description),
    ]);
    tableRows.push([
      "Ingredients",
      ...products.map((product) => product.ingredients),
    ]);
    tableRows.push([
      "Price",
      ...products.map((product) => `$${product.new_price}`),
    ]);

    // Draw table with autoTable
    doc.autoTable({
      head: [tableColumn],
      body: tableRows.map((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          if (rowIndex === 0 && cell.image) {
            return {
              image: cell.image,
              width: cell.width,
              height: cell.height,
            };
          }
          return cell;
        })
      ),
      startY: 30,
      theme: "striped",
      margin: { top: 30, right: 10, bottom: 10, left: 10 },
      styles: { overflow: "linebreak" },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 60 },
        2: { cellWidth: 40 },
        3: { cellWidth: 40 },
        4: { cellWidth: 40 },
      },
      didDrawCell: (data) => {
        if (
          data.column.index > 0 &&
          data.row.index === 0 &&
          data.cell.raw.image
        ) {
          doc.addImage(
            data.cell.raw.image,
            "JPEG",
            data.cell.x + 2,
            data.cell.y + 2,
            data.cell.raw.width,
            data.cell.raw.height
          );
        }
      },
      pageBreak: "auto",
    });

    doc.save("product-comparison.pdf");
  };

  return (
    <div className="comparison-container">
      <button onClick={handleBack} className="back-button">
        &larr; Back to Product
      </button>
      <h1>Product Comparison</h1>
      <button onClick={generatePDF} className="download-pdf-button">
        Download PDF
      </button>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            {products.map((product, index) => (
              <th key={index}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            {products.map((product, index) => (
              <td
                key={index}
                onClick={() => handleImageClick(index)}
                className="image-cell"
              >
                <img src={product.image} alt={product.name} />
              </td>
            ))}
          </tr>
          <tr>
            <td>Description</td>
            {products.map((product, index) => (
              <td key={index}>{product.description}</td>
            ))}
          </tr>
          <tr>
            <td>Ingredients</td>
            {products.map((product, index) => (
              <td key={index}>{product.ingredients}</td>
            ))}
          </tr>
          <tr>
            <td>Price</td>
            {products.map((product, index) => (
              <td key={index}>${product.new_price}</td>
            ))}
          </tr>
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Select a new product</h2>
            <ul>
              {getProductsInCategory(products[0].category).map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleReplaceProduct(product)}
                  className="popup-item"
                >
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                </li>
              ))}
            </ul>
            <button onClick={handlePopupClose} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comparison;
