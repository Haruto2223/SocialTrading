import { FIND_ALL_USERS } from "./types";
import api from "../APIService/api";

export const findAllUsers = () => async(dispatch) => {
    const res = await api.get('/client');
    dispatch({
        type: FIND_ALL_USERS,
        payload: res.data
    })
}