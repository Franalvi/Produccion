import {Request, Response } from 'express';

import pool from '../database';

class IndiceIncidenciasController {

    public async list (req: Request, res: Response) {
        const indicetot = await pool.query('SELECT * FROM Indice_Incidencias');
        console.log(indicetot);
        res.json(indicetot);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const indiceun = await pool.query('SELECT * FROM Indice_Incidencias WHERE id_indice = ?', [id]);
        console.log(indiceun);
        res.json(indiceun);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Indice_Incidencias SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Indice_Incidencias SET ? WHERE id_indice = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Indice_Incidencias WHERE id_indice = ?', [id]);
        res.json({text: 'Se ha eliminado la incidencia ' + req.params.id});
    }
}

const indiceIncidenciasController = new IndiceIncidenciasController(); 
export default indiceIncidenciasController;