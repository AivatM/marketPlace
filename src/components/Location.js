import React from "react";
import { location } from "../assets/images/header/topHeader/icons/index";

function Location() {
  return (
    <a src="#" className="location">
      <img src={location} alt="location" className="location__icon" />
      <span className="location__text">Актобе</span>
    </a>
  );
}

export default Location;
