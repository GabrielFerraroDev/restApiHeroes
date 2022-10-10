import { Request, Response } from 'express';

export const list = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'List of heroes' });
};
export const get = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'A hero' });
};

export const insert = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).send({ message: 'hero inserted' });
};
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).send({ message: 'hero updated' });
};

export const del = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'hero deleted' });
};
