import client from "../client/index";

import {HIDE_LOADER, SET_CATEGORIES, SET_NEWS, SET_NEWS_ITEM, SET_PRODUCTS, SHOW_LOADER} from "./types";

export function showLoader() {
    return {type: SHOW_LOADER}
};
export function hideLoader() {
    return {type: HIDE_LOADER}
};

export function loadProducts() {
    return function (dispatch) {
        dispatch(showLoader());
        client
            .get("newProductsData")
            .then((response) => response.data)
            .then((data) => {
                dispatch({
                    type: SET_PRODUCTS,
                    payload: data,
                });
            });
        dispatch(hideLoader());
    };
}

export function loadCategories(setSubcategories) {
    return function (dispatch) {
        dispatch(showLoader());
        client
            .get("categoryData")
            .then((response) => response.data)
            .then((data) => {
                setSubcategories(data[0].subcategoryData);
                dispatch({
                    type: SET_CATEGORIES,
                    payload: data,
                });
            });
        dispatch(hideLoader());
    };
}

export function loadNews(currentPage, pageSize, setTotalPostCount) {
    return function (dispatch) {
        dispatch(showLoader());
        client
            .get(`newsData?_limit=${pageSize}&_page=${currentPage}`)
            .then((response) => {
                setTotalPostCount(response.headers["x-total-count"]);
                dispatch({
                    type: SET_NEWS,
                    payload: response.data
                })
            })
        dispatch(hideLoader());
    };
}
export function loadNewsItem(postId) {
    return function (dispatch) {
        dispatch(showLoader());
        client
            .get(`newsData/${postId}`)
            .then((response) => response.data)
            .then((data) => {
                dispatch({
                    type: SET_NEWS_ITEM,
                    payload: data,
                });
            });
        dispatch(hideLoader());
    };
}


