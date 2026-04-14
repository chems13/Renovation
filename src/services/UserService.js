import axios from "axios";

const api_url = "http://localhost:4000/user";

export const inscriptionUser = async (data) => {
    try{
        const res = await axios.post(`${api_url}/inscription`, data);
        return res.data;
    }catch(error){
        throw error.response.data || error;
    }
};
    