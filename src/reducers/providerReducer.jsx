import { GET_ALL_PROVIDERS, GET_PROVIDER_INFO } from "../actions/types";

const initialState = {
    provider: null,
    loading: true,
    allProviders: []
}

const providerReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type)
    {
        case GET_ALL_PROVIDERS:
            return {
                ...state,
                allProviders: payload,
                loading: false
            }
        case GET_PROVIDER_INFO:
            return {
                ...state,
                provider: payload
            }
        default:
            return state;
    }
}

export default providerReducer;