import { SET_PROVIDER, SET_STRATEGY } from "./types";
// import api from "../APIService/api";

export const setProvider = (provider) => (dispatch) => {
    dispatch({
        type: SET_PROVIDER,
        payload: provider
    })
}

export const setStrategy = strategy => dispatch => {
    dispatch({
        type: SET_STRATEGY,
        payload: strategy
    })
}