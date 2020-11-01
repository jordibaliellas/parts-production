import React, { ChangeEvent, useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import { environment } from './environment';
import './App.css';
import {Selector, ItemListSelector} from './components/Selector/Selector';
import {Feature} from './components/Feature/Feature';
import NoDataPart from './components/No-data-part/No-data-part';
import { Part } from './models/part.model';

function App() {
  const [partsList, setPartsList] = useState<ItemListSelector[]>([]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  const [part, setPart] = useState<Part>();
  
  let FeatureBody = <NoDataPart></NoDataPart>;

  FeatureBody = part ? <div style={{display: 'flex', flexWrap: 'wrap'}}>{part.features.map((feature, i) => 
    (<div key={feature.name + '-' + i} style={{width: '25%'}}><Feature feature={feature}></Feature></div>)
  )}</div> : <NoDataPart></NoDataPart>; 

  useEffect(() => {
    fetch(`${environment.backendApi}/parts`, {headers: {'Access-Control-Allow-Origin': '*',}, referrerPolicy: "no-referrer"})
      .then(response => response.json())
      .then((parts: Part[]) => parts.map(partItem => ({label: partItem.name, value: partItem.partId.toString()})))
      .then((data: ItemListSelector[]) => setPartsList(data));
    
    console.log('connect to socket');

    const connectionSocket = socketIOClient(environment.socketEndpoint)

    setSocket(connectionSocket);
    connectionSocket.on('message', (data: string) => {
      console.log('Incoming message:', data);
      setPart(JSON.parse(data));
    });
  }, []);

  const handleChange = (item: ChangeEvent<HTMLSelectElement>): void => {
    const value = item.target.value;

    const newPartsList = partsList.map(partItem => {
      if (partItem.value === value) partItem.selected = true;
      else partItem.selected = false;
      return partItem;
    });

    setPartsList(newPartsList);

    if (socket) {
      setPart(undefined);
      socket.emit('part', value);
    }
  }

  return (
    <div>
      <div style={{justifyContent:'center', display: 'flex', padding: '1rem'}}>
        <Selector handleChange={handleChange} optionDefault='Select part' list={partsList}></Selector>
      </div>
      {FeatureBody}
    </div>
  );
}

export default App;
