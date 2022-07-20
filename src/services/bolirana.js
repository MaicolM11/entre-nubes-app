import { getToken } from './storage'

const BASE_URL = '/api/bolirana';

export  const createBolirana = (name) =>{
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: getToken() },
        body: JSON.stringify({
            name: name,
        }),
    }
    return fetch(BASE_URL,requestOptions)
}

export const startBolirana = (id, time) =>{
    const requestOptions = {
        method: 'PUT',
        headers: { "Content-Type": "application/json", authorization: getToken() },
        body: JSON.stringify({
            time: Number(time),
        }),
    }
    return fetch(BASE_URL+`/${id}/start`, requestOptions)
}

export const resetBolirana = (id) =>{
    const requestOptions = {
        method: 'PUT',
        headers: { "Content-Type": "application/json", authorization: getToken() },
    }
    return fetch(BASE_URL+`/${id}/reset`, requestOptions)
}