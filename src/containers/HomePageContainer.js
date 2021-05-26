import React from "react";
import MLayout from "../layouts/MLayout";
import HomeSlider from "../components/HomeSlider";
import NewProducts from "../components/NewProducts";

function HomePageContainer() {
  return (
    <MLayout>
      <HomeSlider />
      <NewProducts />
    </MLayout>
  );
}

export default HomePageContainer;
