//Este archivo es para conectar la base de datos al programa.

// Código de StackOverFlow:

import mysql from 'mysql';
import keys from './keys';
const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
    
});
export default pool;