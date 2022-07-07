import { getToken } from './storage'

const BASE_URL = "/api/debtor"

export const getAllDebtors = ()=>{
    const requestOptions ={
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() }
    } 
    return fetch(BASE_URL, requestOptions)
}

export const createDebtor = (
    fullname, cc, phone, debts
) =>{
    const requestOptions = {
        method : 'POST',
        headers: {'Content-Type': 'application/json', 'authorization': getToken() },
        body : JSON.stringify({
            fullname: fullname,
            cc: cc,
            phone: phone,
            debts: debts
        })
    }
    return fetch(BASE_URL,requestOptions)
}