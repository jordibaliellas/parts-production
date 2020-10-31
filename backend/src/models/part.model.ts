import { Feature } from './feature.model';

export interface Part {
  partId: number;
  name: string;
  features?: Feature[];
}