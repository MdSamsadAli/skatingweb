import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import { classes } from "../data/Data";

const SkatingClass = () => {
  return (
    <>
      <div className="class">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center">
                <Heading
                  title={"Our Skating Class"}
                  description={"There are many variations of passages of Lorem"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            {classes.map((val, key) => (
              <div className="col-md-4 margi_bottom" key={key}>
                <div className="class_box text_align_center">
                  <i>
                    <img src={val.img} alt="#" />
                  </i>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
                <Link className="read_more">{val.btn}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkatingClass;
