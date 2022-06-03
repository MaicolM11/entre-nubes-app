import { getToken } from './token'

const BASE_URL = '/api/category';

export const getAllCategories = () => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() }
    };
    return fetch(BASE_URL, requestOptions);
}

export const createCategory = (name) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() },
        body: JSON.stringify({ 'name': name })
    };
    return fetch(BASE_URL, requestOptions);
}