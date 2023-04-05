import { SET_PROVIDER, SET_STRATEGY } from "../actions/types"

const initialState = {
    provider: null,
    strategy: ''
}

const copyReducer = (state = initialState, action) =>
{
    const {type, payload} = action;
    switch(type)
    {
        case SET_PROVIDER:
            return {
                ...state,
                provider: payload
            }
        default:
            return state;
    }
}

export default copyReducer;