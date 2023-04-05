import { FIND_ALL_USERS } from "../actions/types"

const initialState = {
    client: null,
    clients: [],
    loading: false
}

const clientReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type)
    {
        case FIND_ALL_USERS:
            return {
                ...state,
                clients: payload
            }
        default:
            return state;
    }
}

export default clientReducer;