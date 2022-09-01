const nodo_model = require('../model/nodo.model');

async function getNodo(req, res){
    try {

        let nodo;

        nodo = await nodo_model.obtenerNodo()
        res.status(200).send({status: 200, nodo: nodo})
        
    } catch (error) {

        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function postNodo(req, res){
    const {id_sucursal, nombre}=req.body;
    try {
        
        const nodo = await nodo_model.insertarNodo(id_sucursal, nombre);
        res.status(200).send({mensaje: 'Nodo Creado'})
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function putNodo(req, res){
    const {id_nodo, nombre} = req.body;
    try {
        const nodo = await nodo_model.actualizarNodo(id_nodo, nombre);
        res.status(200).send({mensaje: 'Nodo Actualizado'})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function deleteNodo(req,res){
    const{id_nodo}=req.body;
    try {
        const nodo = await nodo_model.eliminarNodo(id_nodo);
        res.status(200).send({mensaje: 'Nodo eliminado'})

    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}
module.exports={
   getNodo,
   postNodo,
   putNodo,
   deleteNodo

}