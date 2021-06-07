import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import "../assets/styles/ProductCategoryPopup.scss";
import {loadCategories} from "../redux/actions";
import LayoutPopupBody from "../layouts/LayoutPopup/LayoutPopupBody";
import Loader from "../layouts/Loader";

function ProductCategoryPopup(props) {
    const {categoryData, getCategories, loading} = props;
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        getCategories(setSubcategories);
    }, [])
    if (!categoryData) return <Loader/>
    // const [categories, setCategories] = useState([]);
    //
    // if (!categoryData) {
    //     return "Подождите"
    // }

    return (
        <LayoutPopupBody title="Категория товаров" className="product-popup">
            <div className="product-popup__body product-popup-body">
                <div className="product-popup-body__category product-popup-body-category">
                    {

                        categoryData.map(item => (
                            <button key={item.id}
                                    className="product-popup-body-category__items"
                                    onClick={() => setSubcategories(item.subcategoryData)}>
                                {item.name}
                            </button>))
                    }
                </div>
                <div className="product-popup-body__subcategory product-popup-body-subcategory">
                    {
                        subcategories.map(item => (
                            <a key={item.id} className="product-popup-body-subcategory__items" href="#">
                                {item.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </LayoutPopupBody>
    );
}

let mapStateToProps = (state) => {
    return {
        categoryData: state.categories.categories,
        // loading: state.app.loading
    }
}
let mapDispatchToProps = (dispatch) => ({
    getCategories: (setSubcategories) => dispatch(loadCategories(setSubcategories)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryPopup);
