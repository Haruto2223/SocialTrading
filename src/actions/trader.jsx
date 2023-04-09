import { PROVIDER_REGISTER, TRADER_LOADED } from "./types";
import api from "../APIService/api";

export const providerRegister = data => async(dispatch) => {
    try {
        const res = await api.post('/trader/provider', data)

    } catch(e)
    {
        
    }
}