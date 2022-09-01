const cliente_model = require('../model/cliente.model');

async function getCliente(req, res){
    try {

        let cliente;

        cliente = await cliente_model.obtenerCliente()
        res.status(200).send({status: 200, cliente: cliente})
        
    } catch (error) {

        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function postCliente(req, res){
    const {nombre, clavecliente}=req.body;
    try {
        
        const cliente = await cliente_model.insertarCliente(nombre, clavecliente);
        res.status(200).send({mensaje: 'Cliente Creado'})
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function putCliente(req, res){
    const {id_cliente, nombre, clavecliente} = req.body;
    try {
        const cliente = await cliente_model.actualizarCliente(id_cliente, nombre, clavecliente);
        res.status(200).send({mensaje: 'Cliente Actualizado'})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function deleteCliente(req,res){
    const{id_cliente}=req.body;
    try {
        const cliente = await cliente_model.eliminarCliente(id_cliente);
        res.status(200).send({mensaje: 'Cliente eliminado'})

    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}
module.exports={
   getCliente,
   postCliente,
   putCliente,
   deleteCliente

}