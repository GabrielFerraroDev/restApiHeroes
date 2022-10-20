import { Request, Response } from 'express';
import instanceAxios from './axios';
import factoryHero from '../factory/hero';
import { heroModel } from '../models/index';
import { StatusCodes } from 'http-status-codes';

export const list = async (req: Request, res: Response): Promise<Response> => {
  try {
    const heroes = await heroModel.find().exec();
 
    return res.status(StatusCodes.OK).json(heroes);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
export const get = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;

    const hero = await heroModel.find({ idHero: id }).exec();

    if (!hero) return res.status(StatusCodes.NOT_FOUND);

    return res.status(StatusCodes.OK).json(hero);
  } catch (err) {
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
  try {
    

    const id = req.params.id;
    const newHero = req.body;

    const hero = await heroModel.find({ idHero: id }).exec();

    if (!hero) return res.status(StatusCodes.NOT_FOUND);

    await heroModel.updateOne({ idHero: id }, newHero);

    return res
      .status(StatusCodes.OK)
      .json({ message: 'hero updated', idHero: id });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const del = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;

    const hero = await heroModel.find({ idHero: id }).exec();

    if (!hero) return res.status(StatusCodes.NOT_FOUND);

    await heroModel.deleteOne({ idHero: id });

    return res
      .status(StatusCodes.OK)
      .json({ message: 'hero deleted', idHero: id });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
