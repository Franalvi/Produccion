import {Request, Response } from 'express';

import pool from '../database';

class PlanificacionController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`
        SELECT 
            Planificacion.id_orden,
            Planificacion.fecha,
            Trabajadores.nombre AS trabajador,
            Puestos.nombre AS puesto,
            Planificacion.numero
        FROM Planificacion
        JOIN Trabajadores
        ON Planificacion.id_trabajador=Trabajadores.id_trabajador
        JOIN Puestos
        ON Planificacion.id_puesto=Puestos.id_puesto;`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Planificacion WHERE id_orden = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Fecha (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Planificacion WHERE fecha = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Trab (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Planificacion WHERE id_trabajador = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async puesto (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Planificacion WHERE id_puesto = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Planificacion VALUES ('${nuevo['fecha']}', ${nuevo['id_trabajador']}, ${nuevo['id_puesto']}, ${nuevo['numero']})`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Planificacion ORDER BY id_orden DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Planificacion SET fecha ='${actualiza['fecha']}', id_trabajador = ${actualiza['id_trabajador']}, id_puesto = ${actualiza['id_puesto']}, numero = ${actualiza['numero']} WHERE id_orden = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Planificacion WHERE id_orden = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Planificacion WHERE id_orden = '${id}'`);
        console.log({text: 'Se ha eliminado la orden ' + req.params.id});
        res.json({text: 'Se ha eliminado la orden ' + req.params.id});
    }

    public async deleteFecha (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Planificacion WHERE fecha = '${id}'`);
        console.log({text: 'Se ha eliminado la planificación del día ' + req.params.id});
        res.json({text: 'Se ha eliminado la planificación del día ' + req.params.id});
    }
}

const planificacionController = new PlanificacionController(); 
export default planificacionController;