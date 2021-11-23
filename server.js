const express = require('express');
require('dotenv').config()
const path = require('path')

// const react = path.join(__dirname, '../', 'frontend', 'build' );
const react = path.join(__dirname, 'frontend', 'build' );
// console.log(__dirname);
console.log(react);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static(react))
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get('/', (req, res) => {
  res.send('Hello server')
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

