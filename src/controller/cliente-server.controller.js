const clienteserver_model = require('../model/cliente-server.model');

async function getClienteServer(req, res){
    try {

        let cliente;

        cliente = await clienteserver_model.obtenerClienteServer()
        res.status(200).send({status: 200, cliente: cliente})
        
    } catch (error) {

        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function postClienteServer(req, res){
    const {id_cliente, id_server}=req.body;
    try {
        
        const clienteserver = await clienteserver_model.insertarClienteServer(id_cliente, id_server);
        res.status(200).send({mensaje: 'Cliente Creado'})
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function deleteClienteServer(req, res){
    const{id_cliente, id_server}=req.body;
    try {
        const clienteserver = await clienteserver_model.eliminarClienteServer(id_cliente, id_server);
        res.status(200).send({mensaje: 'Cliente eliminado'})
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}


module.exports={
    getClienteServer,
    postClienteServer,
    deleteClienteServer
    

}