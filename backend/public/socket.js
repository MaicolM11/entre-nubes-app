
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWE0OWIxYTc1ODgwNWEzOGExODhkNCIsImlhdCI6MTY1NTIzMTg5NSwiZXhwIjoxNjU1MjY3ODk1fQ._2pZ3cGjvS6MrRdw1hvgbZ6HeZ5e4-1wcp6DjwIi5Jg";
var socket = io('ws://localhost:8000', {
    query: { token }
});
socket.on('sales', (data) => console.log(data))