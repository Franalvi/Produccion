import {Request, Response } from 'express';

import pool from '../database';

class ExperienciaController {

    public async list (req: Request, res: Response) {
        const experiencias = await pool.query('SELECT * FROM Experiencia');
        res.send(experiencias);
    }

    public async expTrab (req: Request, res: Response) {
        const { id } = req.params;
        const experiencia = await pool.query('SELECT * FROM Experiencia WHERE id_trabajador = ?', [id]);
        console.log(experiencia);
        res.json({text: 'Experiencia de trabajador encontrada'});
    }

    public async expPuesto (req: Request, res: Response) {
        const { id } = req.params;
        const experiencia = await pool.query('SELECT * FROM Experiencia WHERE id_puesto = ?', [id]);
        console.log(experiencia);
        res.json({text: 'Experiencia en el puesto encontrada'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Experiencia SET ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Guardado'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Experiencia SET ? WHERE id_trabajador = ?', [req.body, id]);
        res.json({message: 'Actualizado ' + req.params.id});
    }

    public async deleteTrab (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Experiencia WHERE id_trabajador = ?', [id]);
        res.json({text: 'Se ha eliminado la experiencia del trabajador ' + req.params.id});
    }
    public async deletePuesto (req: Request, res: Response): Promise<void> {
        const { id } = req.params; 
        await pool.query('DELETE FROM Experiencia WHERE id_puesto = ?', [id]);
        res.json({text: 'Se ha eliminado la experiencia del puesto ' + req.params.id});
    }
}

const experienciaController = new ExperienciaController(); 
export default experienciaController;