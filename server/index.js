const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

// io.on("connect", (message) => {
//   console.log("Client Connected");
// });

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("submit", (message) => {
    console.log(message);
    io.emit("message",  message );
  });
});

http.listen(8090, () => console.log("listening on http://localhost:8090"));
