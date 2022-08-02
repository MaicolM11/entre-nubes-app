import { getToken } from "./storage";

const BASE_URL = "/api/report";

export const getAllReports = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL, requestOptions);
};
