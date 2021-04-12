import {Request, Response } from 'express';

import pool from '../database';

class PuestosController {

    public async list (req: Request, res: Response) {
        const puestos = await pool.query('SELECT * FROM Puestos');
        res.send(puestos);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const puesto = await pool.query('SELECT * FROM Puestos WHERE id_puesto = ?', [id]);
        console.log(puesto);
        res.json({text: 'Puesto encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Puestos SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Puestos SET ? WHERE id_puesto = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Puestos WHERE id_puesto = ?', [id]);
        res.json({text: 'Se ha eliminado el puesto ' + req.params.id});
    }
}

const puestosController = new PuestosController(); 
export default puestosController;