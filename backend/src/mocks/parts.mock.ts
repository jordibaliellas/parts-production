import { Part } from '../models/part.model';

export const partsMock: Part[] = [
  {
    partId: 1,
    name: 'tornillo',
    features: [
      {
        name: 'Tornillo - feature 1',
        controls: [
          {
            name: 'x',
            dev: 0,
            devOut: 3,
          },
          {
            name: 'y',
            dev: 1,
            devOut: 2,
          },
        ],
      },
      {
        name: 'Tornillo - feature 2',
        controls: [
          {
            name: 'x',
            dev: 1,
            devOut: 5,
          },
        ],
      },
      {
        name: 'Tornillo - feature 3',
        controls: [
          {
            name: 'x',
            dev: 0,
            devOut: 0,
          },
        ],
      },
      {
        name: 'Tornillo - feature 4',
        controls: [
          {
            name: 'x',
            dev: 1,
            devOut: 1,
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
        name: 'Clavo - feature 1',
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
        name: 'Arandela - feature 1',
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
