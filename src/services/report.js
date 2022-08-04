import { getToken } from "./storage";

const BASE_URL = "/api/report";

export const getAllReports = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL, requestOptions);
};

export const filterReports = (start_date, end_date) => {
  console.log(start_date)
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  const searchUrl =
    BASE_URL +
    "/search?" +
    new URLSearchParams({
      start_date: start_date,
      end_date: end_date,
    });
  return fetch(searchUrl, requestOptions);
};
