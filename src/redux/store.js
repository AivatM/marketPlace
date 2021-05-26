import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

const middlewares = [applyMiddleware(thunk, logger)];

export const store = createStore(rootReducer, compose(...middlewares));
