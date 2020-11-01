
import React from 'react';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';

import { Feature as FeatureModel } from '../../models/feature.model';
import ControlsFeature from '../Controls-feature/Controls-feature';
import FooterFeature from '../Footer-feature/Footer-feature';
import TitleFeature from '../Title-feature/Title-feature';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

export interface FeatureStat {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  backgroundColor: string;
}

export const featureStats: FeatureStat[] = [
  {
    icon: CheckCircleOutline,
    backgroundColor: '#329A5D'
  },
  {
    icon: ErrorOutline,
    backgroundColor: '#e9c704'
  },
  {
    icon: HighlightOff,
    backgroundColor: '#F02F40'
  }
];

interface FeatureProps {
  feature: FeatureModel;
}

export function Feature(props: FeatureProps) {
  const featureStat: FeatureStat = featureStats[Math.floor(Math.random() * featureStats.length)]; 

  return (
    <div style={{margin: '.25rem .5rem'}}>
      <TitleFeature title={props.feature.name} icon={featureStat.icon} backgroundColor={featureStat.backgroundColor}></TitleFeature>
      <ControlsFeature controls={props.feature.controls}></ControlsFeature>
      <FooterFeature></FooterFeature>
    </div>
  );
}