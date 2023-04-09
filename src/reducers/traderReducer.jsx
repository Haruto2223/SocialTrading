import { PROVIDER_REGISTER, FOLLOWER_REGISTER, TRADER_LOADED, TRADER_LOGIN } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    category: null,
    trader: null,
    traders: [],
    loading: true,
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
        default:
            return state;
    }
}

export default traderReducer;