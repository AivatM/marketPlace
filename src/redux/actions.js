import client from "../client/index";

import { SET_PRODUCTS } from "./types";

export function loadProducts() {
  return function (dispatch) {
    client
      .get("newProductsData")
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: SET_PRODUCTS,
          payload: data,
        });
      });
  };
}
