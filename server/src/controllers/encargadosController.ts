import {Request, Response } from 'express';

import pool from '../database';

class EncargadosController {

    public async list (req: Request, res: Response) {
        const encargados = await pool.query('SELECT * FROM Encargados');
        console.log(encargados);
        res.json(encargados);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const encargado = await pool.query('SELECT * FROM Encargados WHERE id_encargado = ?', [id]);
        console.log(encargado);
        res.json(encargado);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Encargados SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Encargados SET ? WHERE id_encargado = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Encargados WHERE id_encargado = ?', [id]);
        res.json({text: 'Se ha eliminado el encargado ' + req.params.id});
    }
}

const encargadosController = new EncargadosController(); 
export default encargadosController;