import api from "./api";
export const ClientRegister = async(payload) => await api.post('/client', {...payload});