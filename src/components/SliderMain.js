import Carousel from 'react-bootstrap/Carousel';
import "../css/SliderMain.css"
function SliderMain() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hatyeuthuong.com/uploads/images/news/the-gioi-banh-keo-ngot-ngao-giua-long-thanh-pho-2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hatyeuthuong.com/uploads/images/news/the-gioi-banh-keo-ngot-ngao-giua-long-thanh-pho-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hatyeuthuong.com/uploads/images/news/the-gioi-banh-keo-ngot-ngao-giua-long-thanh-pho-2.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderMain;