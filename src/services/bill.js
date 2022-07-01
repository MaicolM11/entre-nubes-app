import { getToken } from "./storage";

const BASE_URL = '/api/bill';

export const postBill = (
    description,
    sales
) =>{
    const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json", authorization: getToken() },
        body : JSON.stringify({
            location: description,
            sales : sales
        })
    }

    return fetch(BASE_URL, requestOptions)
}

export const updateBill = (id,product, quantity) =>{
    const requestOptions = {
        method : 'PUT',
        headers: { "Content-Type": "application/json", authorization: getToken() },
        body: JSON.stringify({
            product: product,
            quantity: quantity
        })
    }
    return fetch(BASE_URL+`/append/${id}`, requestOptions)
}

export const getAllSalesToDay = () =>{
    const requestOptions ={
        method: 'GET',
        headers: { "Content-Type": "application/json", authorization: getToken() },
    }
    return fetch(BASE_URL+'/my-sales/today', requestOptions)
}