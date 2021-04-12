CREATE DATABASE Datos_Valladolid;
USE Datos_Valladolid;

------------------------------------------------------------------------------------------------
CREATE TABLE Encargados (
id_encargado INT IDENTITY (1,1),
nombre varchar (30),
turno INT,
id_alfabetico varchar (30),
PRIMARY KEY(id_encargado),
);

INSERT INTO Encargados VALUES ('Aitor García', 1, 'IDAITORGARCIA');
INSERT INTO Encargados VALUES ('Víctor Pérez', 2, 'IDVICTORPEREZ');
INSERT INTO Encargados VALUES ('Eduardo de Ávila', NULL, 'IDEDUARDAVILA');

------------------------------------------------------------------------------------------------
CREATE TABLE Trabajadores (
id_trabajador INT IDENTITY (1,1),
nombre varchar (30),
turno INT,
id_alfabetico varchar (30),
PRIMARY KEY(id_trabajador),
FOREIGN KEY(turno) REFERENCES Encargados(id_encargado) ON DELETE SET NULL
);


INSERT INTO Trabajadores VALUES ('Óscar Vicente', 1, 'IDOSCAVICENTE');
INSERT INTO Trabajadores VALUES ('Alejandro Díez', 1, 'IDALEJANDDIEZ');
INSERT INTO Trabajadores VALUES ('Raquel De La Torre', 1, 'IDRAQUELTORRE');
INSERT INTO Trabajadores VALUES ('Carlos Monedero', 1, 'IDCARMONEDERO');
INSERT INTO Trabajadores VALUES ('Fernando Moretón', 1, 'IDFERNMORETON');
INSERT INTO Trabajadores VALUES ('Juan Carlos Martín', 1, 'IDJUANCMARTIN');
INSERT INTO Trabajadores VALUES ('Luis A. Ruifernández', 1, 'IDRUIFERNANDE');			--Mi cosecha
INSERT INTO Trabajadores VALUES ('M de la O Brezo', 1, 'IDMARIOLBREZO');
INSERT INTO Trabajadores VALUES ('Miguel Ángel Barriga', 1, 'IDMIGUBARRIGA');
INSERT INTO Trabajadores VALUES ('Óscar Fernández', 1, 'IDOSFERNANDEZ');
INSERT INTO Trabajadores VALUES ('Óscar Guilarte', 1, 'IDOSCGUILARTE');
INSERT INTO Trabajadores VALUES ('Santos Antón', 1, 'IDSANTOSANTON');
INSERT INTO Trabajadores VALUES ('Pablo Dos Santos', 1, 'IDPABLOSANTOS');
INSERT INTO Trabajadores VALUES ('Marcial Ruiz', 1, 'IDMARCIALRUIZ');			--Mi cosecha
INSERT INTO Trabajadores VALUES ('Asier Aranda', 1, 'IDASIERARANDA');			--Mi cosecha

INSERT INTO Trabajadores VALUES ('Begoña Espinilla', 2, 'IDBEESPINILLA');
INSERT INTO Trabajadores VALUES ('David Gil', 2, 'ID.DAVIDGIL..');
INSERT INTO Trabajadores VALUES ('Fernando Valdivieso', 2, 'IDFVALDIVIESO');
INSERT INTO Trabajadores VALUES ('Javier Fernández', 2, 'IDJAFERNANDEZ');			--Mi cosecha
INSERT INTO Trabajadores VALUES ('Juan Mangas', 2, 'IDJUANMANGAS.');
INSERT INTO Trabajadores VALUES ('Raúl Marín', 2, 'ID.RAULMARIN.');
INSERT INTO Trabajadores VALUES ('Luis González', 2, 'IDLUIGONZALEZ');
INSERT INTO Trabajadores VALUES ('Fernando Pina', 2 ,'IDFERNANDPINA');
INSERT INTO Trabajadores VALUES ('Sergio Velasco G.', 2, 'IDSERGVGARCIA');
INSERT INTO Trabajadores VALUES ('Vidal de Ávila', 2 ,'IDVIDALDAVILA');
INSERT INTO Trabajadores VALUES ('Sergio Álvarez', 2, 'IDSERGIOALVAR');
INSERT INTO Trabajadores VALUES ('Sergio Velasco', 2, 'IDSERGVELASCO');
INSERT INTO Trabajadores VALUES ('Víctor Hernández', 2, 'IDVIHERNANDEZ');			--Mi cosecha
INSERT INTO Trabajadores VALUES ('Christian Soto', 2, 'IDCHRISTISOTO');			--Mi cosecha
INSERT INTO Trabajadores VALUES ('Pedro Prieto', 2, 'IDPEDROPRIETO');
INSERT INTO Trabajadores VALUES ('Raúl Sánchez', 2, 'IDRAULSANCHEZ');			--Mi cosecha
INSERT INTO Trabajadores VALUES ('Mario Bazaco', 2, 'IDMARIOBAZACO');			--Mi cosecha


------------------------------------------------------------------------------------------------
CREATE TABLE Grupo_puestos (
id_grupo INT IDENTITY (1,1),
nombre VARCHAR(20),
PRIMARY KEY(id_grupo)
);


INSERT INTO Grupo_puestos VALUES ('Pre-ensamblados');
INSERT INTO Grupo_puestos VALUES ('Biplaza');
INSERT INTO Grupo_puestos VALUES ('Conductor');

------------------------------------------------------------------------------------------------
CREATE TABLE Puestos (
id_puesto INT IDENTITY (1,1),
nombre VARCHAR(20),
tiempo DEC(15,2),
grupo INT,
PRIMARY KEY(id_puesto),
FOREIGN KEY(grupo) REFERENCES Grupo_puestos(id_grupo) ON DELETE SET NULL
);

/*
INSERT INTO Puestos VALUES ('tap_banq_mono', 3.55, 1);
INSERT INTO Puestos VALUES ('tap_banq_mono_cal', 4.41, 1);
INSERT INTO Puestos VALUES ('prep_estruct', 4.79, 1);
INSERT INTO Puestos VALUES ('union_estruct_banq', 3.38, 1);
INSERT INTO Puestos VALUES ('resp_estruct_lumbar', 1.67, 1);
INSERT INTO Puestos VALUES ('tap_resp_mono', 4.21, 1);
INSERT INTO Puestos VALUES ('tap_resp_mono_cal', 4.99, 1);
INSERT INTO Puestos VALUES ('suspension', 3.93, 1);
INSERT INTO Puestos VALUES ('guias', 2.38, 1);
INSERT INTO Puestos VALUES ('tavolino', 5.36, 1);
INSERT INTO Puestos VALUES ('tap_banq_bip', 4.16, 1);
INSERT INTO Puestos VALUES ('bip_tav', 20, 2);
INSERT INTO Puestos VALUES ('bip', 16.85, 2);
INSERT INTO Puestos VALUES ('final_4w_8w_susp', 13.21, 3);
INSERT INTO Puestos VALUES ('final_8w_susp_cal', 16.89, 3);
INSERT INTO Puestos VALUES ('final_2w', 5.96, 3);
INSERT INTO Puestos VALUES ('EXTRA_poli_d2d', 2, 2); -- En los asientos biplaza de polipiel/D2D tienen +2min para hacerlos. Es el mismo puesto pero al cambiar la funda dan tiempo extra.
INSERT INTO Puestos VALUES ('carga_prueba', 5, NULL);
INSERT INTO Puestos VALUES ('limp_mant', 20, NULL);
INSERT INTO Puestos VALUES ('viajes', 13.89, NULL);
INSERT INTO Puestos VALUES ('retrabajos', 0, NULL);
*/
INSERT INTO Puestos VALUES ('tap_banq_mono', 213, 1);
INSERT INTO Puestos VALUES ('tap_banq_mono_cal', 264.6, 1);
INSERT INTO Puestos VALUES ('prep_estruct', 287.4, 1);
INSERT INTO Puestos VALUES ('union_estruct_banq', 202.8, 1);
INSERT INTO Puestos VALUES ('resp_estruct_lumbar', 100.2, 1);
INSERT INTO Puestos VALUES ('tap_resp_mono', 252.6, 1);
INSERT INTO Puestos VALUES ('tap_resp_mono_cal', 299.4, 1);
INSERT INTO Puestos VALUES ('suspension', 235.8, 1);
INSERT INTO Puestos VALUES ('guias', 142.8, 1);
INSERT INTO Puestos VALUES ('tavolino', 321.6, 1);
INSERT INTO Puestos VALUES ('tap_banq_bip', 249.6, 1);
INSERT INTO Puestos VALUES ('bip_tav', 1200, 2);
INSERT INTO Puestos VALUES ('bip', 1011, 2);
INSERT INTO Puestos VALUES ('final_4w_8w_susp', 792.6, 3);
INSERT INTO Puestos VALUES ('final_8w_susp_cal', 1013.4, 3);
INSERT INTO Puestos VALUES ('final_2w', 357.6, 3);
INSERT INTO Puestos VALUES ('EXTRA_poli_d2d', 120, 2); -- En los asientos biplaza de polipiel/D2D tienen +2min para hacerlos. Es el mismo puesto pero al cambiar la funda dan tiempo extra.
INSERT INTO Puestos VALUES ('carga_prueba', 300, NULL);
INSERT INTO Puestos VALUES ('limp_mant', 1200, NULL);
INSERT INTO Puestos VALUES ('viajes', 833.4, NULL);
INSERT INTO Puestos VALUES ('retrabajos', 60, NULL);
------------------------------------------------------------------------------------------------
CREATE TABLE Experiencia (
id_trabajador INT,
id_puesto INT,
disponible BIT,
experiencia INT,
FOREIGN KEY(id_trabajador) REFERENCES Trabajadores(id_trabajador) ON DELETE CASCADE,
FOREIGN KEY(id_puesto) REFERENCES Puestos(id_puesto) ON DELETE SET NULL
);


-- Introducción de datos -> Excel.

/*
INSERT INTO Experiencia VALUES (1, 1, 'N', NULL); -- Óscar Vicente
INSERT INTO Experiencia VALUES (1, 2, 'N', NULL);
INSERT INTO Experiencia VALUES (1, 3, 'S', 3);
INSERT INTO Experiencia VALUES (1, 4, 'S', 3);
INSERT INTO Experiencia VALUES (1, 5, 'N', NULL);
INSERT INTO Experiencia VALUES (1, 6, 'N', NULL);
INSERT INTO Experiencia VALUES (1, 7, 'N', NULL); -- Sigues con todos los puestos...

INSERT INTO Experiencia VALUES (2, 1, 'S', 3); -- Alejandro Díez
INSERT INTO Experiencia VALUES (2, 2, 'S', 3);
INSERT INTO Experiencia VALUES (2, 3, 'S', 2);
INSERT INTO Experiencia VALUES (2, 4, 'N', NULL);
INSERT INTO Experiencia VALUES (2, 5, 'S', 3);
INSERT INTO Experiencia VALUES (2, 6, 'S', 2);
INSERT INTO Experiencia VALUES (2, 7, 'S', 2); -- ...
*/
------------------------------------------------------------------------------------------------
CREATE TABLE Incidencias (
id_incidencia INT IDENTITY (1,1),
fecha DATE,
id_trabajador INT,
id_puesto INT,
indice INT, --¿Otra tabla?
descripcion VARCHAR (200),
tiempo INT -- Segundos
PRIMARY KEY(id_incidencia),
FOREIGN KEY(id_trabajador) REFERENCES Trabajadores(id_trabajador) ON DELETE SET NULL,
FOREIGN KEY(id_puesto) REFERENCES Puestos(id_puesto) ON DELETE SET NULL,
);

------------------------------------------------------------------------------------------------
CREATE TABLE Registros (
fechaHora DATETIME,
id_trabajador INT,
id_puesto INT,
cantidad_total INT,
cantidad_realizada INT,
tiempo_total INT,
tiempo_empleado INT,
tiempo_disponible INT,
tiempo_perdido INT,
prod DEC(10,4),
cambio_turno BIT,
FOREIGN KEY(id_trabajador) REFERENCES Trabajadores(id_trabajador) ON DELETE SET NULL,
FOREIGN KEY(id_puesto) REFERENCES Puestos(id_puesto) ON DELETE SET NULL,
);
