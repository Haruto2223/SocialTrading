import { PROVIDER_REGISTER, FOLLOWER_REGISTER } from "./types";
import api from "../APIService/api";

export const providerRegister = (data) => async(dispatch) => {
    const res = await api.post('/provider', data);
    dispatch({
        type: PROVIDER_REGISTER,
        payload: res.data
    })
}