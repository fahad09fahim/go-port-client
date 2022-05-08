import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../../Banner/banner1.jpg";
import banner2 from "../../../../Banner/banner2.jpg";
import banner3 from "../../../../Banner/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="text-black mb-4">
              <h3>HP ENVY 15-ep1890TX</h3>
              <p>Intel Core i7-11800H </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Apple Macbook Pro 2019</h3>
            <p>16-inch Retina Display with Touch Bar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <div className="text-black pb-5">
              <h3>ASUS ZenBook 14X UX5401EA </h3>
              <p>Core i5 11th Gen 14" 2.8K OLED Touch Laptop.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
