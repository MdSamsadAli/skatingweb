import React from "react";
import Banner from "../common/Banner";
import SkatingClass from "../components/SkatingClass";

const SkatingClassPage = () => {
  return (
    <div>
      <div>
        <Banner title={"Skating Class"} to={"Home"} current={"Skating"} />
      </div>
      <SkatingClass />
    </div>
  );
};

export default SkatingClassPage;
