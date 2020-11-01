
import React from 'react';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';

import { Feature as FeatureModel } from '../../../../backend/src/models/feature.model';
import ControlsFeature from '../Controls-feature/Controls-feature';
import FooterFeature from '../Footer-feature/Footer-feature';
import TitleFeature from '../Title-feature/Title-feature';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

interface FeatureStat {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  backgroundColor: string;
}

enum KeyFeatureStats {
  Correct = 'correct',
  Warning = 'warning',
  Error = 'error'
}

const featureStats: {[key: string]:  FeatureStat} = {
  correct: {
    icon: CheckCircleOutline,
    backgroundColor: '#329A5D'
  },
  warning: {
    icon: ErrorOutline,
    backgroundColor: '#e9c704'
  },
  error: {
    icon: HighlightOff,
    backgroundColor: '#F02F40'
  }
};

interface FeatureProps {
  feature: FeatureModel;
}

function Feature(props: FeatureProps) {

  const featureStat: FeatureStat = featureStats[KeyFeatureStats.Correct]; 

  return (
    <div>
      <TitleFeature title={props.feature.name} icon={featureStat.icon} backgroundColor={featureStat.backgroundColor}></TitleFeature>
      <ControlsFeature controls={props.feature.controls}></ControlsFeature>
      <FooterFeature></FooterFeature>
    </div>
  );
}

export default Feature;