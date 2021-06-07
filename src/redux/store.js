import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productsReducer } from "./reducers/productsReducer";
import {categoriesReducer} from "./reducers/categoriesReducer";
import {newsReducer} from "./reducers/newsReducer";
import {appReducer} from "./reducers/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  products: productsReducer,
  categories: categoriesReducer,
  news: newsReducer,
});



export const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
