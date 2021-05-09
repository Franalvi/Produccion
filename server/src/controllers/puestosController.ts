import {Request, Response } from 'express';

import pool from '../database';

class PuestosController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`
        SELECT Puestos.id_puesto,
      Puestos.nombre,
      Puestos.tiempo,
      Grupo_puestos.nombre AS grupo
        FROM Puestos
        JOIN Grupo_puestos
        ON Puestos.grupo=Grupo_puestos.id_grupo;`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Puestos WHERE id_puesto = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Grupo (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Puestos WHERE grupo = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Puestos VALUES ('${nuevo['nombre']}', ${nuevo['tiempo']}, ${nuevo['grupo']})`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Puestos ORDER BY id_puesto DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Puestos SET nombre ='${actualiza['nombre']}', tiempo = ${actualiza['tiempo']}, grupo = ${actualiza['grupo']} WHERE id_puesto = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Puestos WHERE id_puesto = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Puestos WHERE id_puesto = '${id}'`);
        console.log({text: 'Se ha eliminado el puesto ' + req.params.id});
        res.json({text: 'Se ha eliminado el puesto ' + req.params.id});
    }
}

const puestosController = new PuestosController(); 
export default puestosController;