import io from "socket.io-client";
import { getToken } from "./storage";

export const getSocket = () => io("ws://localhost:8000", { query: { token: getToken() } });
