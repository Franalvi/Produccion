export interface Encargados {
    id_encargado?: number;
    nombre?: string;
    turno?: number;
    id_alfabetico?: string;
}

export interface Trabajadores {
    id_trabajador?: number;
    nombre?: string;
    turno?: number;
    id_alfabetico?: string;
}

export interface Grupo_puestos {
    id_grupo?: number;
    nombre?: string;
}

export interface Puestos {
    id_puesto?: number;
    nombre?: string;
    tiempo?: number;
    grupo?: number;
}

export interface Experiencia {
    id_experiencia?: number;
    id_trabajador?: number;
    id_puesto?: number;
    disponible?: boolean;
    experiencia?: number;
}

export interface Indice_Incidencias {
    id_indice?: number;
    nombre_incidencia?: string;
    descripcion?: string;
}

export interface Incidencias {
    id_incidencia?: number;
    fecha?: string;
    id_trabajador?: number;
    id_puesto?: number;
    indice?: number;
    tiempo?: number;
    descripcion?: string;
}

export interface Planificacion {
    id_orden?: number;
    fecha?: string;
    id_trabajador?: number;
    id_puesto?: number;
    numero?: number;
}

export interface Registros {
    id_registro?: number;
    fecha?: string;
    id_trabajador?: number;
    id_puesto?: number;
    cantidad_total?: number;
    cantidad_realizada?: number;
    tiempo_total?: number;
    tiempo_empleado?: number;
    tiempo_disponible?: number;
    tiempo_perdido?: number;
    produccion?: number;
    productividad?: number;
    ritmo?: number;
    tiempo_restante?: number;
    cambio_turno?: number;
}