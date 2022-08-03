import { getToken } from "./storage";

const BASE_URL = "/api/notification";

export const readAllNotifications = () => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", authorization: getToken() },
  };
  return fetch(BASE_URL + "/read-all", requestOptions);
};