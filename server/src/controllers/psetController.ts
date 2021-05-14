import { Request, Response } from 'express';


import { PSET } from "../models/Pset";
import { getConnection, getRepository } from "typeorm";

export async function getPset(req: Request, res: Response): Promise<Response>{
  try {
    const pset = await getRepository('PSET').find()
    return res.json(pset)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }

};