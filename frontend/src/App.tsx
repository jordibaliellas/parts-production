import React, { ChangeEvent, useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import { Part } from '../../backend/src/models/part.model';
import { environment } from './environment';
import './App.css';

function App() {
  const [parts, setParts] = useState<Part[]>([]);
  let socket: SocketIOClient.Socket;
  socket = socketIOClient(environment.socketEndpoint);
  socket.on('message', (data: string) => {
    console.log('Incoming message:', data);
  });

  useEffect(() => {
    fetch(`${environment.backendApi}/parts`, {headers: {'Access-Control-Allow-Origin': '*',}, referrerPolicy: "no-referrer"})
      .then(response => response.json())
      .then(data => setParts(data));
  }, []);


  const handleChange = (item: ChangeEvent<HTMLSelectElement>) => {
    console.log('parts', parts);

    const value = item.target.value;
    if (value === '0') return;

    socket.emit('part', value);

    console.log('chaangee select');
    console.log(item.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="0">Select part</option>

      {parts.map((part, i) => 
         (<option key={part.partId} value={part.partId}>{part.name}</option>)
      )}
    </select>
  );
}

export default App;
