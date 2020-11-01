import React from 'react';
import { Control } from '../../../../backend/src/models/control.model';

interface ControlsProps {
  controls: Control[];
}

function ControlsFeature(props: ControlsProps) {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#D2D2D2', color: '#484848', display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Control</th>
            <th>Dev</th>
            <th>Dev out total</th>
          </tr>
        </thead>
        <tbody>
          {props.controls.map((control, i) => 
            (<tr key={'control-' + i}>
              <td>{control.name}</td>
              <td>{control.dev}</td>
              <td>{control.devOut}</td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ControlsFeature;