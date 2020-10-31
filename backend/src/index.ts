import express from 'express';
import cors from 'cors';
import http from 'http';
import SocketIo from 'socket.io';
import { getParts } from './routes/parts.router';
import { partSocket } from './sockets/part.socket';
const app = express();
app.use(cors());
const server = http.createServer(app);

const io = SocketIo(server);

app.get('/parts', getParts);

io.on('connection', partSocket(io));

io.on('connection', (socket) => {
  // tslint:disable-next-line: no-console
  console.log('New client connected');

  socket.on('disconnect', () => {
    // tslint:disable-next-line: no-console
    console.log('Client disconnected');
  });
});

server.listen(3030, () => {
  // tslint:disable-next-line: no-console
  console.log('Server running in http://localhost:3030');
});
