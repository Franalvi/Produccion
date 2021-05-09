import {Request, Response } from 'express';

import pool from '../database';

class ExperienciaController {

    public async list (req: Request, res: Response) {
        const lectura = await pool.query(`
SELECT Experiencia.id_experiencia,
      Trabajadores.nombre AS trabajador,
      Puestos.nombre AS puesto,
      Experiencia.disponible,
      Experiencia.experiencia
  FROM Experiencia
  JOIN Trabajadores
  ON Experiencia.id_trabajador=Trabajadores.id_trabajador
  JOIN Puestos
  ON Experiencia.id_puesto=Puestos.id_puesto;`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Experiencia WHERE id_experiencia = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async expTrab (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Experiencia WHERE id_trabajador = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async expPuesto (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Experiencia WHERE id_puesto = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async disponible (req: Request, res: Response) {
        const { id } = req.params;
        const lectura = await pool.query(`SELECT * FROM Experiencia WHERE disponible = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async create (req: Request, res: Response): Promise<void> {
        const nuevo = (req.body);
        await pool.query(`INSERT INTO Experiencia VALUES (${nuevo['id_trabajador']}, ${nuevo['id_puesto']}, ${nuevo['disponible']}, ${nuevo['experiencia']})`);
        const lectura = await pool.query(`SELECT TOP (1) * FROM Experiencia ORDER BY id_experiencia DESC`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const actualiza = (req.body);
        await pool.query(`UPDATE Experiencia SET id_trabajador ='${actualiza['id_trabajador']}', id_puesto = ${actualiza['id_puesto']}, disponible = ${actualiza['disponible']}, experiencia = ${actualiza['experiencia']} WHERE id_experiencia = '${id}'`);
        const lectura = await pool.query(`SELECT * FROM Experiencia WHERE id_experiencia = '${id}'`);
        console.log(lectura.recordset);
        res.json(lectura.recordset);
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Experiencia WHERE id_experiencia = '${id}'`);
        console.log({text: 'Se ha eliminado la experiencia del trabajador en el puesto'});
        res.json({text: 'Se ha eliminado la experiencia del trabajador en el puesto'});
    }

    public async deleteTrab (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Experiencia WHERE id_trabajador = '${id}'`);
        console.log({text: 'Se ha eliminado toda la experiencia del trabajador ' + req.params.id});
        res.json({text: 'Se ha eliminado toda la experiencia del trabajador ' + req.params.id});
    }

    public async deletePuesto (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query(`DELETE FROM Experiencia WHERE id_puesto = '${id}'`);
        console.log({text: 'Se ha eliminado toda la experiencia del puesto ' + req.params.id});
        res.json({text: 'Se ha eliminado toda la experiencia del puesto ' + req.params.id});
    }
}

const experienciaController = new ExperienciaController(); 
export default experienciaController;