import {HIDE_LOADER, SHOW_LOADER} from "../types";

const initialAppState = {
    loading: false,
}

export function appReducer(state=initialAppState,action) {
    switch(action.type) {
        case SHOW_LOADER: {
            return {...state, loading: true}
        }
        case HIDE_LOADER: {
            return {...state, loading: false}
        }
        default:
            return state
    }
}