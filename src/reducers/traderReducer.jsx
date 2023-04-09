import { PROVIDER_REGISTER } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    category: null,
    trader: null,
    traders: [],
    loading: true,
}

const traderReducer = (state = initialState, action) => {
    const [type, payload] = action;

    switch(type)
    {
        case PROVIDER_REGISTER:
            return {
                ...state,
                loading: false,
                category: 'provider',
                token: payload,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default traderReducer;