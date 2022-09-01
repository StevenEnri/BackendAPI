const { servidorDB } = require('../config/postgres.connection');


async function obtenerSucursal() {
    const query = 'SELECT * FROM sucursal'

    const sucursal = await servidorDB.query(query);
    return sucursal.rows;

}

async function obtenerSucursalUser(suc_user) {
    const query = 'select suc_user, suc_pass from sucursal where suc_user = $1'
    const sucursal = await servidorDB.query(query, [suc_user]);
    return sucursal.rows[0];
}

async function insertarSucursal(direccion, suc_user, suc_pass) {
    const query = 'INSERT INTO public.sucursal (direccion, suc_user, suc_pass) VALUES ($1, $2, $3)'
    const sucursal = await servidorDB.query(query, [direccion, suc_user, suc_pass]);
    return sucursal.rows;

}

async function actualizarSucursal(id_sucursal, direccion, suc_user, suc_pass) {
    const query = 'UPDATE sucursal SET direccion = $2, suc_user=$3, suc_pass=$4 WHERE id_sucursal =$1'
    const sucursal = await servidorDB.query(query, [id_sucursal, direccion, suc_user, suc_pass]);
    return sucursal.rows;
}


async function eliminarSucursal(id_sucursal) {
    const query = 'DELETE FROM public.sucursal WHERE id_sucursal=$1'
    const sucursal = await servidorDB.query(query, [id_sucursal])
    return sucursal.rows;
}
module.exports = {
    obtenerSucursal,
    insertarSucursal,
    actualizarSucursal,
    eliminarSucursal,
    obtenerSucursalUser
}
