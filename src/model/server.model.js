const { servidorDB } = require('../config/postgres.connection');


async function obtenerServer() {
    const query = 'SELECT * FROM server'

    const server = await servidorDB.query(query);
    return server.rows;

}

async function insertarServer(id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada) {
    const query = 'INSERT INTO public.server (id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) '
    const server = await servidorDB.query(query, [id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada]);
    return server.rows;

}

async function actualizarServer(id_server, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada) {
    const query = 'UPDATE server SET nombre_servidor =$2, claveservidor=$3, ip_publica=$4, portwireguard=$5, subred=$6, dns=$7, ip_privada=$8 WHERE id_server =$1'
    const server = await servidorDB.query(query, [id_server, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada]);
    return server.rows;
}


async function eliminarServer(id_server) {
    const query = 'DELETE FROM public.server WHERE id_server=$1'
    const server = await servidorDB.query(query, [id_server])
    return server.rows;
}
module.exports = {
    obtenerServer,
    insertarServer,
    actualizarServer,
    eliminarServer
}
