import { getToken } from './storage'

const BASE_URL = '/api/desk';

export const closeDesk = () => {
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() }
    };
    return fetch(BASE_URL + "/close", requestOptions);
}