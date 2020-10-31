import { Request, Response } from 'express';
import { partsMock } from '../mocks/parts.mock';

export const getParts = (req: Request, res: Response): Response<any> => {
  // TODO: get parts from controller
  const parts = partsMock;

  return res.json(parts);
};
