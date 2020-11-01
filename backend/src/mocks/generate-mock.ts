import { Control } from '../models/control.model';
import { Feature } from '../models/feature.model';

const namesControls = ['position', 'x', 'y', 'z', 'length', 'diameter'];

export const generateFeaturesMock = (partName: string): Feature[] => {
  const totalFeatures = randomNum(10, 1);

  const features: Feature[] = [];

  for (let i = 0; i < totalFeatures; i++) {
    const newFeature: Feature = {
      name: `${partName} - feature ${i}`,
      controls: generateControls(),
    };
    features.push(newFeature);
  }

  return features;
};

const generateControls = (): Control[] => {
  const totalControls = randomNum(10, 1);

  const controls: Control[] = [];

  for (let i = 0; i < totalControls; i++) {
    const newControl: Control = {
      name: namesControls[randomNum(namesControls.length - 1)],
      dev: randomNum(),
      devOut: randomNum(),
    };

    controls.push(newControl);
  }

  return controls;
};

const randomNum = (max: number = 10, min: number = 0) =>
  Math.floor(Math.random() * (max - min) + min);
