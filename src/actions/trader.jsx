import { PROVIDER_REGISTER, TRADER_LOADED, REGISTER_FAIL, FOLLOWER_REGISTER, TRADER_LOGIN } from "./types";
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