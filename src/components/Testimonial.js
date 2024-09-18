import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import { testimonial } from "../data/Data";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div class="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="titlepage text_align_center">
                <Heading title={"Testimonial"} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="carousel slide" data-ride="carousel">
                <Slider {...settings}>
                  {testimonial.map((val, key) => (
                    <div class="carousel-inner" key={key}>
                      <div class="carousel-item active">
                        <div class="container-fluid">
                          <div class="carousel-caption relative">
                            <div class="row d_flex">
                              <div class="col-md-3">
                                <div class="test_box text_align_center">
                                  <span>
                                    <img src={val.img} alt="val.img" />
                                  </span>
                                  <h4>{val.name}</h4>
                                  <img
                                    class="img_responsive"
                                    src={val.img_icon}
                                    alt="img"
                                  />
                                  <p>{val.description}</p>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="test_box white_bg text_align_center">
                                  <span>
                                    <img src={val.img} alt="img" />
                                  </span>
                                  <h4>{val.name2}</h4>
                                  <img
                                    class="img_responsive"
                                    src="images/te2.png"
                                    alt="#"
                                  />
                                  <p>{val.description}</p>
                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="test_box text_align_center">
                                  <span>
                                    <img src={val.img} alt="img" />
                                  </span>
                                  <h4>{val.name}</h4>
                                  <img
                                    class="img_responsive"
                                    src="images/te.png"
                                    alt="#"
                                  />
                                  <p>{val.description}</p>
                                </div>
                              </div>
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
    </>
  );
};

export default Testimonial;
