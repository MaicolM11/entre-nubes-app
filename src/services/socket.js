import io from "socket.io-client";
import { getToken } from "./storage";

let token = getToken();

export const getSocket = () => io("ws://localhost:8000", { query: { token } });
