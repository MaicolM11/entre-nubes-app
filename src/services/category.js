import { getToken } from "./storage";

const BASE_URL = "/api/category";

export const getAllCategories = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL, requestOptions);
};

export const createCategory = (name) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: getToken() },
    body: JSON.stringify({ name: name }),
  };
  return fetch(BASE_URL, requestOptions);
};

export const editCategory = (id, name) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", authorization: getToken() },
    body: JSON.stringify({ name: name }),
  };
  return fetch(BASE_URL + `/${id}`, requestOptions);
};

export const addMinimunQuantitiesToCategory = (id, quantities) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", authorization: getToken() },
    body: JSON.stringify({ minimum_quantities: quantities }),
  };
  return fetch(BASE_URL + `/${id}`, requestOptions);
};

export const deleteCategory = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL + `/${id}`, requestOptions);
};
