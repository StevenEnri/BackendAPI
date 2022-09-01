const server_model = require('../model/server.model');

async function getServer(req, res){
    try {

        let server;

        server = await server_model.obtenerServer()
        res.status(200).send({status: 200, server: server})
        
    } catch (error) {

        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function postServer(req, res){
    const {id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada}=req.body;
    try {
        
        const server = await server_model.insertarServer(id_nodo, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada);
        res.status(200).send({mensaje: 'server Creado'})
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function putServer(req, res){
    const {id_server, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada} = req.body;
    try {
        const server = await server_model.actualizarServer(id_server, nombre_servidor, claveservidor, ip_publica, portwireguard, subred, dns, ip_privada);
        res.status(200).send({mensaje: 'server Actualizado'})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function deleteServer(req,res){
    const{id_server}=req.body;
    try {
        const server = await server_model.eliminarServer(id_server);
        res.status(200).send({mensaje: 'server eliminado'})

    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}
module.exports={
   getServer,
   postServer,
   putServer,
   deleteServer

}