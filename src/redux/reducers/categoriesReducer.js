import {SET_CATEGORIES} from "../types";

const initialCategoriesState = {
    categories: [],
}

export function categoriesReducer(state=initialCategoriesState,action) {
    switch(action.type) {
        case SET_CATEGORIES: {
            return {...state, categories: action.payload}
        }
        default:
            return state
    }
}