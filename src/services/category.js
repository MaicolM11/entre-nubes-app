const BASE_URL = '/api/category';
import { getToken } from './token'

export const getAllCategories = () => {
    const requestOptions = {
        headers: { 'authorization': getToken() }
    };
    return fetch(BASE_URL, requestOptions);
}

export const createCategory = (name) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'authorization': getToken() },
        body: JSON.stringify({ 'name': name })
    };
    return fetch(BASE_URL, requestOptions);
}