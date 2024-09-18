import React from "react";
import { banner } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="full_bg">
        <div className="slider_main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-inner">
                    <Slider {...settings}>
                      {banner.map((val, key) => (
                        <div className="carousel-item" key={key}>
                          <div className="carousel-caption relative">
                            <div className="row d_flex">
                              <div className="col-md-5">
                                <div className="board">
                                  <i>
                                    <img src={val.icon_img} alt="#" />
                                  </i>
                                  <h3>{val.text}</h3>
                                  <div className="link_btn">
                                    <Link className="read_more">
                                      {val.btn}
                                      <span></span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-7">
                                <div className="banner_img">
                                  <figure>
                                    <img
                                      className="img_responsive"
                                      src={val.img}
                                      alt="img"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
