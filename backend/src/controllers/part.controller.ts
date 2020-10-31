import { partsMock } from '../mocks/parts.mock';
import { Part } from '../models/part.model';

export const getPart = (room: string): Part => {
  const part: Part = partsMock.find(
    (partMock) => partMock.partId === +room.split('-').pop()
  );

  return part;
};
