import io from "socket.io-client";
import { getToken } from "./storage";

export const getSocket = () => io("https://entre-nubes.herokuapp.com/", { query: { token: getToken() } });
