import { getToken } from './token'

const BASE_URL = '/api/product';

export const getAllProducts = () => {
    const requestOptions = { 
        headers: { 'authorization': getToken() } 
    };
    return fetch(BASE_URL, requestOptions);
}
