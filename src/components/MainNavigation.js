import React from "react";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  let mainNavigationData = [
    { id: 1, name: "Главная" },
    { id: 2, name: "О компании" },
    { id: 3, name: "Поддержка" },
    { id: 4, name: "Контакты" },
  ];
  return (
    <nav className="menu">
      <ul className="menu__list">
        {mainNavigationData.map((item) => (
          <li key={item.id} className="menu__item">
            <NavLink to="#" className="menu__link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
