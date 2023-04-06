import { FIND_ALL_CLIENTS, GET_CLIENT } from "../actions/types"

const initialState = {
    client: null,
    clients: [],
    loading: false
}

const clientReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type)
    {
        case FIND_ALL_CLIENTS:
            return {
                ...state,
                clients: payload
            }
        case GET_CLIENT:
            return {
                ...state,
                client: state.clients.filter(item => item._id === payload)[0]
            }
        default:
            return state;
    }
}

export default clientReducer;