import { Part } from '../models/part.model';

export const partsMock: Part[] = [
  {
    partId: 1,
    name: 'tornillo',
    features: [
      {
        name: 'feature 1',
        controls: [
          {
            name: 'x',
            dev: 0,
            devOut: 10,
          },
        ],
      },
    ],
  },
  {
    partId: 2,
    name: 'clavo',
    features: [
      {
        name: 'feature 1',
        controls: [
          {
            name: 'x',
            dev: 0,
            devOut: 10,
          },
        ],
      },
    ],
  },
  {
    partId: 3,
    name: 'arandela',
    features: [
      {
        name: 'feature 1',
        controls: [
          {
            name: 'x',
            dev: 0,
            devOut: 10,
          },
        ],
      },
    ],
  },
];
