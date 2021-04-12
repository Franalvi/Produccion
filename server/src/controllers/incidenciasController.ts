import {Request, Response } from 'express';

import pool from '../database';

class IncidenciasController {

    public async list (req: Request, res: Response) {
        const incidencias = await pool.query('SELECT * FROM Incidencias');
        res.send(incidencias);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const incidencia = await pool.query('SELECT * FROM Incidencias WHERE id_incidencia = ?', [id]);
        console.log(incidencia);
        res.json({text: 'Incidencia encontrada'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Incidencias SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Incidencias SET ? WHERE id_incidencia = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Incidencias WHERE id_incidencia = ?', [id]);
        res.json({text: 'Se ha eliminado la incidencia ' + req.params.id});
    }
}

const incidenciasController = new IncidenciasController(); 
export default incidenciasController;