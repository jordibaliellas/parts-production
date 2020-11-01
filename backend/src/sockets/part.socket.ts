import { getPart } from '../controllers/part.controller';
import { Part } from '../models/part.model';

export const partSocket = (io: SocketIO.Server) => {
  setInterval(() => {
    const totalClients = Object.keys(io.sockets.adapter.rooms).reduce(
      (pv, room) => pv + io.sockets.adapter.rooms[room].length,
      0
    );

    if (totalClients === 0) return;

    Object.keys(io.sockets.adapter.rooms).forEach((room) => {
      const part: Part = getPart(room);
      if (!part) return;

      io.sockets.in(room).emit('message', JSON.stringify(part));
    });
  }, 3000);

  return (socket: SocketIO.Socket) => {
    socket.on('part', (partId: string) => {
      socket.leaveAll();
      const room = `part-${partId}`;

      const part: Part = getPart(room);
      if (!part) return;

      socket.join(room).emit('message', JSON.stringify(part));
    });
  };
};
