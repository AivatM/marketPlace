import React from "react";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  let mainNavigationData = [
    { id: 1, name: "Главная", src: "/" },
    { id: 2, name: "О компании",src: "/about"},
    { id: 3, name: "Поддержка",src: "/support" },
    { id: 4, name: "Контакты",src: "/contacts" },
    { id: 5, name: "Блог",src: "/news" },
  ];
  return (
    <nav className="menu">
      <ul className="menu__list">
        {mainNavigationData.map((item) => (
          <li key={item.id} className="menu__item">
            <NavLink to={item.src} className="menu__link">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
