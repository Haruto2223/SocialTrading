import { PROVIDER_REGISTER, TRADER_LOADED, REGISTER_FAIL, FOLLOWER_REGISTER, TRADER_LOGIN, GET_TRADERS, GET_ALL_PROVIDERS } from "./types";
import api from "../APIService/api";

export const traderLoad = () => async(dispatch) => {
    try{
        const res = await api.get('/trader');
        dispatch({
            type: TRADER_LOADED,
            payload: res.data
        })
    } catch(e)
    {

    }
}

export const providerRegister = data => async(dispatch) => {
    try {
        const res = await api.post('/trader/provider', data);
        dispatch({
            type: PROVIDER_REGISTER,
            payload: res.data
        })
        dispatch(traderLoad());

    } catch(e)
    {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const followerRegister = data => async(dispatch) => {
    try {
        const res = await api.post('/trader/follower', data);
        dispatch({
            type: FOLLOWER_REGISTER,
            payload: res.data
        })
        dispatch(traderLoad());

    } catch(e)
    {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const login = data => async(dispatch) => {
    try {
        const res = await api.post('/trader/login', data);
        dispatch({
            type: TRADER_LOGIN,
            payload: res.data
        });
        dispatch(traderLoad());
    } catch(e)
    {

    }
}

export const getMyProviders = () => async(dispatch) => {
    try {
        const res = await api.get('/trader/follower');
        dispatch({
            type: GET_TRADERS,
            payload: res.data
        })

    } catch(e)
    {

    }
}

export const getMyFollowers = () => async(dispatch) => {
    try {
        const res = await api.get('/trader/provider');
        dispatch({
            type: GET_TRADERS,
            payload: res.data
        })

    } catch(e)
    {

    }
}

export const getAllProviders = () => async(dispatch) => {
    try{
        const res = await api.get('/trader/provider/all');
        dispatch({
            type: GET_ALL_PROVIDERS,
            payload: res.data
        })
    } catch(e) {

    }
}