const { servidorDB } = require('../config/postgres.connection');


async function obtenerClienteServer() {
    const query = 'SELECT * FROM cliente_server'

    const clienteserver = await servidorDB.query(query);
    return clienteserver.rows;

}

async function insertarClienteServer(id_cliente, id_server) {
    const query = 'INSERT INTO public.cliente_server (id_cliente, id_server) VALUES ($1, $2) '
    const clienteserver = await servidorDB.query(query, [id_cliente, id_server]);
    return clienteserver.rows;

}

async function eliminarClienteServer(id_cliente, id_server){
    const query = 'DELETE FROM public.cliente_server WHERE id_cliente=$1 and id_server=$2'
    const clienteserver = await servidorDB.query(query,[id_cliente, id_server]);
    return clienteserver.rows;
}


module.exports = {
    obtenerClienteServer,
    insertarClienteServer,
    eliminarClienteServer
}
