import {Request, Response } from 'express';

import pool from '../database';

class GrupoPuestosController {

    public async list (req: Request, res: Response) {
        const grupo_puestos = await pool.query('SELECT * FROM Grupo_puestos');
        res.send(grupo_puestos);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const grupo_puestos = await pool.query('SELECT * FROM Grupo_puestos WHERE id_grupo = ?', [id]);
        console.log(grupo_puestos);
        res.json({text: 'Grupo encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Grupo_puestos SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Grupo_puestos SET ? WHERE id_grupo = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Grupo_puestos WHERE id_grupo = ?', [id]);
        res.json({text: 'Se ha eliminado el grupo ' + req.params.id});
    }
}

const grupoPuestosController = new GrupoPuestosController(); 
export default grupoPuestosController;