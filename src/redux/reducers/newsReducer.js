import {SET_NEWS, SET_NEWS_ITEM} from "../types";

const initialNewsState = {
    news: [],
    newsItem:null,
}

export function newsReducer(state=initialNewsState,action) {
    switch(action.type) {
        case SET_NEWS:
            return {...state, news: action.payload}
        case SET_NEWS_ITEM:
            return {...state, newsItem: action.payload}
        default:
            return state
    }
}