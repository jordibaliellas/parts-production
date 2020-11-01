import React, { ChangeEvent, useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import { Part } from '../../backend/src/models/part.model';
import { environment } from './environment';
import './App.css';
import {Selector, ItemListSelector} from './components/Selector/Selector';
import Feature from './components/Feature/Feature';
import NoDataPart from './components/No-data-part/No-data-part';

function App() {
  const [partsList, setPartsList] = useState<ItemListSelector[]>([]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  const [part, setPart] = useState<Part>();
  
  let FeatureBody = <NoDataPart></NoDataPart>;
  FeatureBody = part ? <div>{part.features.map((feature, i) => 
    (<Feature key={feature.name + '-' + i} feature={feature}></Feature>)
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
      {/* <TitleFeature title={titleFeature} icon={icon} backgroundColor={backgroundColor}></TitleFeature>
      <ControlsFeature controls={(part && part.features && part.features[0] && part.features[0].controls) || []}></ControlsFeature>
      <FooterFeature></FooterFeature> */}
      {FeatureBody}
    </div>
  );
}

export default App;
