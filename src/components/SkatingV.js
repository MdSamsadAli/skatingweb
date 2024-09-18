import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { scatevideo } from "../data/Data";

const SkatingV = () => {
  return (
    <>
      <div class="skating">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage text_align_center">
                <Heading
                  title={"Skating Video"}
                  description={`There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered`}
                />
              </div>
            </div>
          </div>
          <div class="row">
            {scatevideo.map((video, key) => (
              <div class="col-md-4">
                <div class="skating-box ">
                  <figure>
                    <img src={video.img} alt="#" />
                  </figure>
                  <div class="link_btn">
                    <Link class="read_more">{video.btn}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkatingV;
