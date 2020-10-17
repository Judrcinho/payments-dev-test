import axios from 'axios';

export const getCustomers = () => {
    return axios
            .get("/customers")
            .then(responce => responce.data);
}

export const getMerchants = () => {
    return axios
            .get("/merchants")
            .then(responce => responce.data);    
}

export const getMerchant = (id: string) => {
    return axios
            .get(`/merchants/${id}`)
            .then(responce => responce.data);    
}