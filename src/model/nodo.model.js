const { servidorDB } = require('../config/postgres.connection');


async function obtenerNodo() {
    const query = 'SELECT * FROM nodo'

    const nodo = await servidorDB.query(query);
    return nodo.rows;

}

async function insertarNodo(id_sucursal, nombre) {
    const query = 'INSERT INTO public.nodo (id_sucursal, nombre) VALUES ($1, $2) '
    const nodo = await servidorDB.query(query, [id_sucursal, nombre]);
    return nodo.rows;

}

async function actualizarNodo(id_nodo, nombre) {
    const query = 'UPDATE nodo SET nombre = $2 WHERE id_nodo =$1'
    const nodo = await servidorDB.query(query, [id_nodo, nombre]);
    return nodo.rows;
}


async function eliminarNodo(id_nodo) {
    const query = 'DELETE FROM public.nodo WHERE id_nodo=$1'
    const nodo = await servidorDB.query(query, [id_nodo])
    return nodo.rows;
}
module.exports = {
    obtenerNodo,
    insertarNodo,
    actualizarNodo,
    eliminarNodo
}
