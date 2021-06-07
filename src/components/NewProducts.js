import React, {useEffect} from "react";
import "../assets/styles/NewProducts.scss";
import {connect} from "react-redux";
import {loadProducts} from "../redux/actions";
import Loader from "../layouts/Loader";

function NewProducts(props) {
    const {getProducts, newProducts, loading} = props;
    useEffect(() => {
        getProducts();
    }, []);
    if (!newProducts) return <Loader/>
    return (
        <div className="new-products">
            <div className="container">
                <h2 className="new-products__title">Новинки</h2>
                <div className="new-products__wrap">
                    {newProducts
                        .reverse()
                        .filter((item) => item.isNew === true)
                        .slice(0, 12)
                        .map((item) => (
                            <div key={item.id} className="product-card">
                                <img
                                    src={item.src}
                                    alt="product-1"
                                    className="product-card__img"
                                />
                                <div className="product-card__name">{item.name}</div>
                                <div className="product-card__price">{item.price + " тг"}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    newProducts: state.products.newProducts,
    // loading: state.app.loading
});
let mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(loadProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
