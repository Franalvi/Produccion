import {Request, Response } from 'express';

import pool from '../database';

class TrabajadoresController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`
    SELECT
        id_trabajador,
        Trabajadores.nombre,
        Encargados.nombre AS encargado,
        Trabajadores.id_alfabetico
    FROM Trabajadores
    JOIN Encargados
    ON Trabajadores.turno = Encargados.id_encargado; `);

        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Trabajadores WHERE id_trabajador = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async turno (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Trabajadores WHERE turno = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Trabajadores VALUES ('${nuevo['nombre']}', ${nuevo['turno']}, '${nuevo['id_alfabetico']}')`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Trabajadores ORDER BY id_trabajador DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Trabajadores SET nombre ='${actualiza['nombre']}', turno = ${actualiza['turno']}, id_alfabetico = '${actualiza['id_alfabetico']}' WHERE id_trabajador = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Trabajadores WHERE id_trabajador = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Trabajadores WHERE id_trabajador = '${id}'`);
        console.log({text: 'Se ha eliminado el trabajador ' + req.params.id});
        res.json({text: 'Se ha eliminado el trabajador ' + req.params.id});
    }
}

const trabajadoresController = new TrabajadoresController(); 
export default trabajadoresController;