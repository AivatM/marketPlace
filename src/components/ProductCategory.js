import React from "react";
import productCategoryIcon from "../assets/images/header/topHeader/icons/product-category.png";
import ProductCategoryPopup from "./ProductCategoryPopup";
import {usePopupContext} from "../layouts/LayoutPopup/LayoutPopup";

function ProductCategory() {
    const {visible, onClickHandler} = usePopupContext();
    return (
        <div className="product-category">
            <a onClick={onClickHandler} src="#" className="product-category__btn">
                <img
                    src={productCategoryIcon}
                    alt="product-category-icon"
                    className="product-category__icon"
                />
                <span className="product-category__text">Категория товаров</span>

            </a>
            {visible && <ProductCategoryPopup/>}
        </div>
    )
}

export default ProductCategory