import { FOLLOWER_REGISTER, PROVIDER_REGISTER, TRADER_LOGIN, TRADER_LOADED, GET_TRADERS, LOGOUT } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    trader: null,
    myTraders: [],
    category: null
}

const authReducer = (state = initialState, action) =>
{
    const {type, payload } = action;

    switch(type)
    {
        case GET_TRADERS:
            return {
                ...state,
                myTraders: payload
            }
        case TRADER_LOADED:
            return {
            ...state,
            loading: false,
            isAuthenticated: true,
            category: payload.category,
            trader: payload.trader
            }
        case FOLLOWER_REGISTER:
            return {
                ...state,
                loading: false,
                ...payload,
                isAuthenticated: true
            }
        case PROVIDER_REGISTER:
            return {
                ...state,
                loading: false,
                ...payload,
                isAuthenticated: true
            }
        case TRADER_LOGIN:
            return {
                ...state,
                loading: false,
                ...payload,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                trader: null,
                token: null,
                loading: false,
                myTraders: []
            }
        default:
            return state;
    }
}

export default authReducer;