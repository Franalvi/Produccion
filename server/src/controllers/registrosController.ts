import {Request, Response } from 'express';

import pool from '../database';

class RegistrosController {

    public async list (req: Request, res: Response) {
        const registros = await pool.query('SELECT * FROM Registros');
        res.send(registros);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const registro = await pool.query('SELECT * FROM Registros WHERE id_registro = ?', [id]);
        console.log(registro);
        res.json({text: 'Registro encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Registros SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Registros SET ? WHERE id_registro = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Registros WHERE id_registro = ?', [id]);
        res.json({text: 'Se ha eliminado el registro ' + req.params.id});
    }
}

const registrosController = new RegistrosController(); 
export default registrosController;