import React from "react";
import Banner from "../common/Banner";
import SkatingShop from "../components/SkatingShop";

const SkatingShopPage = () => {
  return (
    <div>
      <div>
        <Banner title={"Skating Shop"} to={"Home"} current={"Skating"} />
      </div>
      <SkatingShop />
    </div>
  );
};

export default SkatingShopPage;
