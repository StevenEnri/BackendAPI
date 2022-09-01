const { servidorDB } = require('../config/postgres.connection');


async function obtenerallowed_ips() {
    const query = 'SELECT * FROM allowed_ips'

    const allowed_ips = await servidorDB.query(query);
    return allowed_ips.rows;

}

async function insertarallowed_ips(id_server, allowed_ips) {
    const query = 'INSERT INTO public.allowed_ips (id_server, allowed_ips) VALUES ($1, $2)'
    const allowed = await servidorDB.query(query, [id_server, allowed_ips]);
    return allowed.rows;

}

async function actualizarallowed_ips(id_allowed, allowed_ips) {
    const query = 'UPDATE allowed_ips SET allowed_ips = $2 WHERE id_allowed =$1'
    const allowed = await servidorDB.query(query, [id_allowed, allowed_ips]);
    return allowed.rows;
}


async function eliminarallowed_ips(id_allowed) {
    const query = 'DELETE FROM public.allowed_ips WHERE id_allowed=$1'
    const allowed = await servidorDB.query(query, [id_allowed])
    return allowed.rows;
}
module.exports = {
    obtenerallowed_ips,
    insertarallowed_ips,
    actualizarallowed_ips,
    eliminarallowed_ips
}
