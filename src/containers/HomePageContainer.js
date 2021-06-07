import React from "react";
import MLayout from "../layouts/MLayout";
import HomeSlider from "../components/HomeSlider";
import NewProducts from "../components/NewProducts";
import Loader from "../layouts/Loader";

function HomePageContainer() {
  return (
    <MLayout>
      <HomeSlider />
      <NewProducts />
    </MLayout>
  );
}

export default HomePageContainer;
