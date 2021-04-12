import {Request, Response } from 'express';

import pool from '../database';

class TrabajadoresController {

    public async list (req: Request, res: Response) {
        const trabajadores = await pool.query('SELECT * FROM Trabajadores');
        res.send(trabajadores);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const trabajador = await pool.query('SELECT * FROM Trabajadores WHERE id_trabajador = ?', [id]);
        console.log(trabajador);
        res.json({text: 'Trabajador encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Trabajadores SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Trabajadores SET ? WHERE id_trabajador = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Trabajadores WHERE id_trabajador = ?', [id]);
        res.json({text: 'Se ha eliminado el trabajador ' + req.params.id});
    }
}

const trabajadoresController = new TrabajadoresController(); 
export default trabajadoresController;