import { PROVIDER_REGISTER, FOLLOWER_REGISTER, TRADER_LOADED, TRADER_LOGIN, GET_TRADERS, GET_ALL_PROVIDERS } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    category: null,
    trader: null,
    traders: [],
    loading: true,
    allProviders: []
}

const traderReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type)
    {
        case PROVIDER_REGISTER:
            return {
                ...state,
                loading: false,
                ...payload,
                isAuthenticated: true
            }
        case FOLLOWER_REGISTER:
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
        case TRADER_LOADED:
            return {
                ...state,
                loading: false,
                category: payload.category,
                trader: payload.trader
            }
        case GET_TRADERS:
            return {
                ...state,
                traders: payload
            }
        case GET_ALL_PROVIDERS:
            return {
                ...state,
                allProviders: payload,
                loading: false
            }
        default:
            return state;
    }
}

export default traderReducer;