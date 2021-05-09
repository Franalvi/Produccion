import {Request, Response } from 'express';

import pool from '../database';

class RegistrosController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`SELECT * FROM Registros`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Registros WHERE id_registro = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Fecha (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Registros WHERE fecha = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Trab (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Registros WHERE id_trabajador = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async Puesto (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Registros WHERE id_puesto = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async cambio_turno (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Registros WHERE cambio_turno = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Registros VALUES ('${nuevo['fecha']}', ${nuevo['id_trabajador']}, ${nuevo['id_puesto']} , ${nuevo['cantidad_total']}, ${nuevo['cantidad_realizada']}, ${nuevo['tiempo_total']}, ${nuevo['tiempo_empleado']}, ${nuevo['tiempo_disponible']}, ${nuevo['tiempo_perdido']}, ${nuevo['produccion']}, ${nuevo['productividad']}, ${nuevo['ritmo']}, ${nuevo['tiempo_restante']}, ${nuevo['cambio_turno']})`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Registros ORDER BY id_registro DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Registros SET fecha ='${actualiza['fecha']}', id_trabajador = ${actualiza['id_trabajador']}, id_puesto = ${actualiza['id_puesto']}, cantidad_total = ${actualiza['cantidad_total']}, cantidad_realizada = ${actualiza['cantidad_realizada']}, tiempo_total = ${actualiza['tiempo_total']}, tiempo_empleado = ${actualiza['tiempo_empleado']}, tiempo_disponible = ${actualiza['tiempo_disponible']}, tiempo_perdido = ${actualiza['tiempo_perdido']}, produccion = ${actualiza['produccion']}, productividad = ${actualiza['productividad']}, ritmo = ${actualiza['ritmo']}, tiempo_restante = ${actualiza['tiempo_restante']}, cambio_turno = ${actualiza['cambio_turno']} WHERE id_registro = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Registros WHERE id_registro = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Registros WHERE id_registro = '${id}'`);
        console.log({text: 'Se ha eliminado el registro ' + req.params.id});
        res.json({text: 'Se ha eliminado el registro ' + req.params.id});
    }

    public async deleteFecha (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Registros WHERE fecha = '${id}'`);
        console.log({text: 'Se ha eliminado el registro ' + req.params.id});
        res.json({text: 'Se ha eliminado el registro ' + req.params.id});
    }
}

const registrosController = new RegistrosController(); 
export default registrosController;