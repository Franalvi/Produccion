/* import { Request, Response } from 'express';


import { Controller } from "../models/Controller";
import { getConnection, getRepository } from "typeorm";

export const getResult = async (req: Request, res: Response): Promise<Response> => {
  try {
    const controller = await getRepository('Result').find()
    return res.json(controller)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }

}; */