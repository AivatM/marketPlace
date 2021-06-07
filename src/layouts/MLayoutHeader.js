import React from "react";
import Logo from "../components/Logo";
import "../assets/styles/MLayoutHeader.scss";
import {
    favorites,
    myProfile,
    productCategory,
    shoppingCart,
} from "../assets/images/header/topHeader/icons/index";
import MainNavigation from "../components/MainNavigation";
import Location from "../components/Location";
import MobileNavigation from "../components/MobileNavigation";
import ProductCategory from "../components/ProductCategory";
import LayoutPopup from "./LayoutPopup/LayoutPopup";

function MLayoutHeader() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__top">
                    <Logo/>

                    <div className="search">
                        <input
                            className="search__input"
                            type="search"
                            placeholder="Поиск"
                        />
                        <div className="search__wrap-btn">
                            <button className="search__btn"></button>
                        </div>
                    </div>

                    <Location/>

                    <div className="flex">
                        <a src="#" className="favorites">
                            <img
                                src={favorites}
                                alt="favorites-icon"
                                className="favorites__icon"
                            />
                        </a>
                        <a src="#" className="shopping-cart">
                            <img
                                src={shoppingCart}
                                alt="shopping-cart-icon"
                                className="shopping-cart__icon"
                            />
                        </a>
                        <a src="#" className="profile">
                            <img
                                src={myProfile}
                                alt="profile-icon"
                                className="profile__icon"
                            />
                            <span className="profile__text">Профиль</span>
                        </a>
                    </div>
                </div>

                <div className="header__bottom header-bottom">
                    <LayoutPopup>
                        <ProductCategory/>
                    </LayoutPopup>

                    <MainNavigation/>
                    <MobileNavigation/>
                </div>
            </div>
        </div>
    );
}

export default MLayoutHeader;
