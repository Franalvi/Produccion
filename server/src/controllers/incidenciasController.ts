import {Request, Response } from 'express';

import pool from '../database';

class IncidenciasController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`
        SELECT Incidencias.id_incidencia,
      Incidencias.fecha,
      Trabajadores.nombre AS trabajador,
      Puestos.nombre AS puesto,
      Indice_Incidencias.nombre_incidencia AS indice,
      Incidencias.tiempo,
      Incidencias.descripcion
        FROM Incidencias
        JOIN Trabajadores
        ON Incidencias.id_trabajador=Trabajadores.id_trabajador
        JOIN Puestos
        ON Incidencias.id_puesto=Puestos.id_puesto
        JOIN Indice_Incidencias
        ON Incidencias.indice=Indice_Incidencias.id_indice;`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Incidencias WHERE id_incidencia = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Fecha (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Incidencias WHERE fecha = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Trab (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Incidencias WHERE id_trabajador = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Puesto (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Incidencias WHERE id_puesto = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Indice (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Incidencias WHERE indice = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Incidencias VALUES ('${nuevo['fecha']}', ${nuevo['id_trabajador']}, ${nuevo['id_puesto']}, ${nuevo['indice']}, ${nuevo['tiempo']}, '${nuevo['descripcion']}')`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Incidencias ORDER BY id_incidencia DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Incidencias SET fecha ='${actualiza['fecha']}', id_trabajador = ${actualiza['id_trabajador']}, id_puesto = ${actualiza['id_puesto']}, indice = ${actualiza['indice']}, tiempo = ${actualiza['tiempo']}, descripcion = '${actualiza['descripcion']}'  WHERE id_incidencia = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Incidencias WHERE id_incidencia = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Incidencias WHERE id_incidencia = '${id}'`);
        console.log({text: 'Se ha eliminado la incidencia ' + req.params.id});
        res.json({text: 'Se ha eliminado la incidencia ' + req.params.id});
    }

    public async deleteFecha (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Incidencias WHERE fecha = '${id}'`);
        console.log({text: 'Se han eliminado las incidencias del día ' + req.params.id});
        res.json({text: 'Se han eliminado las incidencias del día ' + req.params.id});
    }
}

const incidenciasController = new IncidenciasController(); 
export default incidenciasController;