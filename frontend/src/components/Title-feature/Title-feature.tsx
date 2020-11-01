import React from 'react';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

interface PropsTitleFeature {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  backgroundColor: string;
}

function TitleFeature(props: PropsTitleFeature) {
  const Icon = props.icon;

  return (
    <div style={{ padding: '1rem', backgroundColor: props.backgroundColor, color: 'white', display: 'flex', justifyContent:'space-between' }}>
      <RadioButtonUnchecked/>
      <span>{props.title}</span>
      <Icon/>
    </div>
  );
}

export default TitleFeature;