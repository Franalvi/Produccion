import {Request, Response } from 'express';

import pool from '../database';

class GrupoPuestosController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`SELECT * FROM Grupo_puestos`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Grupo_puestos WHERE id_grupo = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Grupo_puestos VALUES ('${nuevo['nombre']}')`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Grupo_puestos ORDER BY id_grupo DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Grupo_puestos SET nombre ='${actualiza['nombre']}' WHERE id_grupo = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Grupo_puestos WHERE id_grupo = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Grupo_puestos WHERE id_grupo = '${id}'`);
        console.log({text: 'Se ha eliminado el grupo ' + req.params.id});
        res.json({text: 'Se ha eliminado el grupo ' + req.params.id});
    }
}

const grupoPuestosController = new GrupoPuestosController(); 
export default grupoPuestosController;