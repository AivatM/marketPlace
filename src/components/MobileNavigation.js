import React, {useState} from "react";
import Location from "./Location";
import "../assets/styles/MobileNavigation.scss";
import {NavLink} from "react-router-dom";

function MobileNavigation() {
    let mainNavigationData = [
        {id: 1, name: "Главная", src: "/"},
        {id: 2, name: "О компании", src: "/about"},
        {id: 3, name: "Поддержка", src: "/support"},
        {id: 4, name: "Контакты", src: "/contacts"},
        {id: 5, name: "Блог", src: "/news"},
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
                <Location/>
                <ul className="mobile-nav__list">
                    {mainNavigationData.map((item) => (
                        <li key={item.id} className="mobile-nav__item">
                            <NavLink to={item.src} className="mobile-nav__link">
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
