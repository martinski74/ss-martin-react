"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../app/css/slider.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div
            className="slider-item"
            style={{ backgroundImage: "url(/images/slider_pic.jpg)" }}
          >
            <div className="slider-content">
              <h2>Добре дошли в хотел Aqua</h2>
              <p>Насладете се на комфортна почивка и първокласно обслужване</p>
              <a href="/hotel" className="btn">Разгледайте хотела</a>
            </div>
          </div>
        </div>
        <div>
          <div
            className="slider-item"
            style={{ backgroundImage: "url(/images/slider_pic1.jpg)" }}
          >
            <div className="slider-content">
              <h2>Ресторант-градина „При Мартин“</h2>
              <p>Опитайте нашите специалитети в приятна и уютна обстановка</p>
              <a href="/restaurant" className="btn">Разгледайте ресторанта</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
