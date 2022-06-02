import { getToken } from "./token";

const BASE_URL = '/api/user';

export const getMyInfo = () => {
    const requestOptions = {
        headers: { 'authorization': getToken() },
    };
    return fetch(BASE_URL + '/my-info', requestOptions);
}