"use strict";

(function() {
    
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDE4YjljMTc5YTc0NzQ4NDgxYjQzMiIsImlhdCI6MTY1ODI0NjIwMCwiZXhwIjoxNjU4MjgyMjAwfQ.SDRKxd--UffDFH5Gd2lS6BYNumnOSiIfXWSEifaSW70";
    const socket = io('ws://localhost:8000', {
        query: { token }
    });
  
  socket.on('sales', (data) => console.log(data))

  socket.on('notifications', (data) => console.log('noti', data))

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
