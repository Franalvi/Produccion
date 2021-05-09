import {Request, Response } from 'express';

import pool from '../database';

class EncargadosController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`SELECT * FROM Encargados`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Encargados WHERE id_encargado = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }
    
    /* Otra forma:
    public async getOne (req: Request, res: Response) {
        const lectura = await pool.query("SELECT * FROM Encargados WHERE id_encargado = '" + req.params.id + "'");
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }*/

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Encargados VALUES ('${nuevo['nombre']}', ${nuevo['turno']}, '${nuevo['id_alfabetico']}')`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Encargados ORDER BY id_encargado DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Encargados SET nombre ='${actualiza['nombre']}', turno = ${actualiza['turno']}, id_alfabetico = '${actualiza['id_alfabetico']}' WHERE id_encargado = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Encargados WHERE id_encargado = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Encargados WHERE id_encargado = '${id}'`);
        console.log({text: 'Se ha eliminado el encargado ' + req.params.id});
        res.json({text: 'Se ha eliminado el encargado ' + req.params.id});
    }
}

const encargadosController = new EncargadosController(); 
export default encargadosController;