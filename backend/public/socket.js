"use strict";

(function() {
    
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWE0OWIxYTc1ODgwNWEzOGExODhkNCIsImlhdCI6MTY1NTIzOTYyMywiZXhwIjoxNjU1Mjc1NjIzfQ.0fd0TyuKObRH9nze6PTN9czu5-vtZfEKmiobA-dKBm0";
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
