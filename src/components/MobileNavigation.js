import React, { useState } from "react";
import Location from "./Location";
import "../assets/styles/MobileNavigation.scss";
import { NavLink } from "react-router-dom";

function MobileNavigation() {
  let mainNavigationData = [
    { id: 1, name: "Главная" },
    { id: 2, name: "О компании" },
    { id: 3, name: "Поддержка" },
    { id: 4, name: "Контакты" },
  ];

  let [isActive, setIsActive] = useState(false);
  let body = document.getElementById("body");
  body.style.overflow = isActive ? "hidden" : "";

  return (
    <div className="mobile-menu">
      <div
        onClick={() => setIsActive(!isActive)}
        src="#"
        className="burger-menu"
      >
        <span
          className={`burger-menu__line ${isActive ? "active" : ""}`}
        ></span>
      </div>

      <nav className={`mobile-nav ${isActive ? "active" : ""}`}>
        <Location />
        <ul className="mobile-nav__list">
          {mainNavigationData.map((item) => (
            <li key={item.id} className="mobile-nav__item">
              <NavLink to="#" className="mobile-nav__link">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavigation;
