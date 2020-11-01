import React from 'react';
import { Control } from '../../models/control.model';

import { randomNum } from '../../utils/random-num';
import { featureStats } from '../Feature/Feature';

interface ControlsProps {
  controls: Control[];
}

function ControlsFeature(props: ControlsProps) {

  const iconsByControls: {icon: JSX.Element, backgroundColor: string}[] = props.controls.map(() => {
    const featureStat = featureStats[randomNum(featureStats.length)];
    const Icon = featureStat.icon;
    return {
      icon: <Icon/>,
      backgroundColor: featureStat.backgroundColor
    }
  });

  return (
    <div style={{ padding: '1rem', backgroundColor: '#D2D2D2', color: '#484848', display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Control</th>
            <th>Dev</th>
            <th>Dev out total</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {props.controls.map((control, i) => 
            (<tr key={'control-' + i}>
              <td style={{textAlign: 'left'}}>{control.name}</td>
              <td style={{textAlign: 'center'}}>{control.dev}</td>
              <td style={{ textAlign: 'center' }}>{control.devOut}</td>
              <td style={{color: iconsByControls[i].backgroundColor}}> {iconsByControls[i].icon} </td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ControlsFeature;