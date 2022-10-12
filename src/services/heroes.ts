import { Request, Response } from 'express';
import instanceAxios from './axios';
import factoryHero from '../factory/hero';
import { heroModel } from '../models/index';
import { StatusCodes } from 'http-status-codes';

export const list = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'List of heroes' });
};
export const get = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;

    const hero = await heroModel.find({ idHero: id }).exec();

    if (!hero) return res.status(StatusCodes.NOT_FOUND);

    return res.status(StatusCodes.OK).json(hero);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
export const insert = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const randomNumber = Math.floor(Math.random() * 101);
    const { data: resAxiosHero } = await instanceAxios.get(``);

    const randomHero = resAxiosHero.data.results[randomNumber];

    const newHero = factoryHero.createHero(randomHero);

    console.log(newHero);

    await heroModel.create(newHero);

    return res.status(StatusCodes.CREATED).json(newHero);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
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
