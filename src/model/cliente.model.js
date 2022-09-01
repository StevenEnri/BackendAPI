const { servidorDB } = require('../config/postgres.connection');


async function obtenerCliente() {
    const query = 'SELECT * FROM cliente'

    const cliente = await servidorDB.query(query);
    return cliente.rows;

}

async function insertarCliente(nombre, clavecliente) {
    const query = 'INSERT INTO public.cliente (nombre, clavecliente) VALUES ($1, $2) '
    const cliente = await servidorDB.query(query, [nombre, clavecliente]);
    return cliente.rows;

}

async function actualizarCliente(id_cliente, nombre, clavecliente) {
    const query = 'UPDATE cliente SET nombre = $2, clavecliente = $3 WHERE id_cliente =$1'
    const cliente = await servidorDB.query(query, [id_cliente, nombre, clavecliente]);
    return cliente.rows;
}


async function eliminarCliente(id_cliente) {
    const query = 'DELETE FROM public.cliente WHERE id_cliente=$1'
    const cliente = await servidorDB.query(query, [id_cliente])
    return cliente.rows;
}
module.exports = {
    obtenerCliente,
    insertarCliente,
    actualizarCliente,
    eliminarCliente
}
