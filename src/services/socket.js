import io from 'socket.io-client'

import { getToken } from './storage';

let token = getToken();

const socket = io('ws://localhost:8000', {
    query: { token }
});

export default socket;