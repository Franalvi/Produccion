import {Request, Response } from 'express';

import pool from '../database';

class PlanificacionController {

    public async list (req: Request, res: Response) {
        const planes = await pool.query('SELECT * FROM Planificacion');
        res.send(planes);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const plan = await pool.query('SELECT * FROM Planificacion WHERE id_orden = ?', [id]);
        console.log(plan);
        res.json({text: 'Plan encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Planificacion SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Planificacion SET ? WHERE id_orden = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Planificacion WHERE id_orden = ?', [id]);
        res.json({text: 'Se ha eliminado el plan ' + req.params.id});
    }
}

const planificacionController = new PlanificacionController(); 
export default planificacionController;