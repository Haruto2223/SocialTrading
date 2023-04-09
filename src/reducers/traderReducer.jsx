import { PROVIDER_REGISTER, FOLLOWER_REGISTER, TRADER_LOADED } from "../actions/types";

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
                category: 'provider',
                ...payload,
                isAuthenticated: true
            }
        case FOLLOWER_REGISTER:
            return {
                ...state,
                loading: false,
                category: 'follower',
                ...payload,
                isAuthenticated: true
            }
        case TRADER_LOADED:
            return {
                ...state,
                loading: false,
                category: '',
                trader: payload
            }
        default:
            return state;
    }
}

export default traderReducer;