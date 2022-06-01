const BASE_URL = '/api/product';
import { getToken } from './token'

export const getAllProducts = () => {
    const requestOptions = { 
        headers: { 'authorization': getToken() } 
    };
    return fetch(BASE_URL, requestOptions);
}
