import {Request, Response } from 'express';

import pool from '../database';

class IndiceIncidenciasController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`SELECT * FROM Indice_Incidencias`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Indice_Incidencias WHERE id_indice = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Indice_Incidencias VALUES ('${nuevo['nombre_incidencia']}', '${nuevo['descripcion']}')`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Indice_Incidencias ORDER BY id_indice DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Indice_Incidencias SET nombre_incidencia ='${actualiza['nombre_incidencia']}', descripcion = '${actualiza['descripcion']}' WHERE id_indice = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Indice_Incidencias WHERE id_indice = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Indice_Incidencias WHERE id_indice = '${id}'`);
        console.log({text: 'Se ha eliminado la incidencia ' + req.params.id});
        res.json({text: 'Se ha eliminado la incidencia ' + req.params.id});
    }
}

const indiceIncidenciasController = new IndiceIncidenciasController(); 
export default indiceIncidenciasController;