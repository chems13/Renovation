import api from "./api";

export const inscriptionUser = async (data) => {
    try{
        const res = await api.post(`/user`, data);
        return res.data;
    }catch(error){
        throw error.response.data || error;
    }
};
    