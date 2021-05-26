import { SET_PRODUCTS } from "../types";

const initialProductsState = {
  newProducts: [],
};

export function productsReducer(state = initialProductsState, action) {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, newProducts: action.payload };
    }
    default:
      return state;
  }
}
