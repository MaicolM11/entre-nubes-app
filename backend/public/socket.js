"use strict";

(function() {
    
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQ5OWEwYTQzZTU0ZmM4NTIyNmQ4MCIsImlhdCI6MTY1NzExOTIwNywiZXhwIjoxNjU3MTU1MjA3fQ.pcXOXPWGPTsiu4P8gZWTNxVN7IA3AEfhjq-s0XLaGBY";
    const socket = io('ws://localhost:8000', {
        query: { token }
    });
  
  socket.on('sales', (data) => console.log(data))

  socket.on("connect", () => {
    console.log(`connect ${socket.id}`);
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("disconnect", (reason) => {
    console.log(`disconnect due to ${reason}`);
  });

})();
