//Este archivo es para conectar la base de datos al programa.

const pool = require('mssql'); // declara variable sql con acceso a mssql. Previamente haces npm i mssql

try { // try catch: hace el try y si no anda hace el catch
    pool.connect('mssql://DevIsriVa:Dev+2022@SRVEXPVA/dev/Datos_Valladolid?encrypt=true'); 
    // Usuario sql: DevIsriVa. Contraseña SQL: Dev+2022. Nombre del servidor:SRVEXPVA/dev. Base de datos: Datos_Valladolid.
    // Usuario sql: isri. Contraseña SQL: isri. Nombre del servidor:LAPTOP-T76T7RH8/SQLEXPRESS. Base de datos: Datos_Valladolid.
    // CUIDADO: Instancia de NO desarrollo: Usuario sql: DevIsriVa. Contraseña SQL: Dev+2021. Nombre del servidor:SRVEXPVA 
    console.log('Se ha conectado a la base de datos');
} catch (error) {
    console.log(error)
}
export default pool;

// PARA MYSQL: Código de StackOverFlow:
/*
import mysql from 'mysql';
import keys from './keys';
const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
    
}); 
export default pool;
*/

