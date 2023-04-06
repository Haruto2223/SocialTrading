import { FIND_ALL_CLIENTS, GET_CLIENT } from "./types";
import api from "../APIService/api";

export const findAllUsers = () => async(dispatch) => {
    const res = await api.get('/client');
    dispatch({
        type: FIND_ALL_CLIENTS,
        payload: res.data
    })
}

export const getClient = (id) => ({type: GET_CLIENT, payload: id});