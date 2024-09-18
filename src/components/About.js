import React from "react";
import Heading from "../common/Heading";
// import Heading from "../common/Heading";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-6">
              <div className="titlepage text_align_left">
                <Heading
                  title={"About Skating school"}
                  description={`There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alterationThere are
                  many variatioThere are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered
                  alterationThere are many variationsns`}
                  btn={"Read More"}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img text_align_center">
                <figure>
                  <img src="images/about.png" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
