import { useEffect, useState } from "react";
import * as C from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const SliderIntro = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 3,
  };
  return (
    <>
      <C.Container>
        <div className="left-side">
          <span>02.</span>
          <h1>Dark Interior</h1>
        </div>
        <div className="right-side">
          <Slider {...settings}>
            <div className="image-slider">
              <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
            <div className="image-slider">
              <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
            <div className="image-slider">
              <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
          </Slider>
        </div>
      </C.Container>
    </>
  );
};
