import { getToken } from "./token";

const BASE_URL = '/api/user';

export const getMyInfo = () => {
    const requestOptions = {
        headers: { 'authorization': getToken() },
    };
    return fetch(BASE_URL + '/my-info', requestOptions);
}

export const getAllUsers = () => {
    const requestOptions = {
        method: 'GET',
        headers: { "Content-Type": "application/json", authorization: getToken() },
    };
    return fetch(BASE_URL , requestOptions);
}

export const createUser = (
  fullname,
  email,
  password,
  cc,
  address,
  phone,
  rol
) =>{
    const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json", authorization: getToken() },
        body : JSON.stringify(
            {
                fullname: fullname,
                email: email,
                password: password,
                cc: cc,
                address:address,
                phone: phone,
                rol: rol
            }
        ),
    };
    return fetch(BASE_URL,requestOptions)
}

export const deleteUser = (id) =>{
    const requestOptions = {
        method : 'DELETE',
        headers: { "Content-Type": "application/json", authorization: getToken() },
    }
    return fetch(BASE_URL+`/${id}`,requestOptions)
}