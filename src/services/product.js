import { getToken } from "./storage";

const BASE_URL = "/api/product";

export const getAllProducts = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL, requestOptions);
};

export const getByIdProducts = (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL + `/${id}`, requestOptions);
};

export const deleteProduct = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL + `/${id}`, requestOptions);
};

export const updateUnits = (id, units) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", authorization: getToken() },
    body: JSON.stringify({
      increment: units,
    }),
  };
  return fetch(BASE_URL + `/${id}/stock`, requestOptions);
};

export const editProduct = (
  id,
  brand,
  category,
  buy_price,
  sale_price,
  presentation,
  stock,
  img_url
) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", authorization: getToken() },
    body: JSON.stringify({
      brand: brand,
      category: category,
      buy_price: parseInt(buy_price, 10),
      sale_price: parseInt(sale_price, 10),
      presentation: presentation,
      stock: parseInt(stock, 10),
      img_url: img_url,
    }),
  };
  return fetch(BASE_URL + `/${id}`, requestOptions);
};

export const createProduct = (
  brand,
  category,
  buy_price,
  sale_price,
  presentation,
  stock,
  img_url
) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: getToken() },
    body: JSON.stringify({
      brand: brand,
      category: category,
      buy_price: parseInt(buy_price, 10),
      sale_price: parseInt(sale_price, 10),
      presentation: presentation,
      stock: parseInt(stock, 10),
      img_url: img_url,
    }),
  };
  return fetch(BASE_URL, requestOptions);
};

export const filterProducts = (categoryId, brand) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };

  const searchUrl =
    BASE_URL +
    "/search?" +
    new URLSearchParams({
      category: categoryId,
      brand: brand,
    });

  return fetch(searchUrl, requestOptions);
};
