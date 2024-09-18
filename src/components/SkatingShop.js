import React from "react";
import Heading from "../common/Heading";

const SkatingShop = () => {
  return (
    <>
      <div class="shop">
        <div class="container-fluid">
          <div class="row d_flex d_grid">
            <div class="col-md-7">
              <div class="shop_img text_align_center" data-aos="fade-right">
                <figure>
                  <img class="img_responsive" src="images/shop.png" alt="#" />
                </figure>
              </div>
            </div>
            <div class="col-md-5 order_1_mobile">
              <div class="titlepage text_align_left ">
                <Heading
                  title={"Our Skate Shop"}
                  description={`There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alterationThere are
                  many variatioThere are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alterationThere are many variationsns`}
                  btn={"Buy Now"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkatingShop;
