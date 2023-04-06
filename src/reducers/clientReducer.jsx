import { FIND_ALL_CLIENTS, GET_CLIENT, CLEAR_CLIENT } from "../actions/types"

const initialState = {
    client: null,
    clients: [],
    loading: true
}

const clientReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type)
    {
        case FIND_ALL_CLIENTS:
            return {
                ...state,
                loading: false,
                clients: payload
            }
        case GET_CLIENT:
            return {
                ...state,
                loading: false,
                client: state.clients.filter(item => item._id === payload)[0]
            }
        case CLEAR_CLIENT:
            return {
                ...state,
                loading: false,
                client: null
            }
        default:
            return state;
    }
}

export default clientReducer;