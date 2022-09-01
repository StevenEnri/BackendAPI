const allowed_ips_model = require('../model/allowed.model');

async function getallowed_ips(req, res){
    try {

        let allowed_ips;

        allowed_ips = await allowed_ips_model.obtenerallowed_ips()
        res.status(200).send({status: 200, allowed_ips: allowed_ips})
        
    } catch (error) {

        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function postallowed_ips(req, res){
    const {id_server, allowed_ips}=req.body;
    try {
        
        const allowed = await allowed_ips_model.insertarallowed_ips(id_server, allowed_ips);
        res.status(200).send({mensaje: 'Allowed_ips Creado'})
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function putallowed_ips(req, res){
    const {id_allowed, allowed_ips} = req.body;
    try {
        const allowed = await allowed_ips_model.actualizarallowed_ips(id_allowed, allowed_ips);
        res.status(200).send({mensaje: 'Allowed_ips Actualizado'})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}

async function deleteallowed_ips(req,res){
    const{id_allowed}=req.body;
    try {
        const allowed = await allowed_ips_model.eliminarallowed_ips(id_allowed);
        res.status(200).send({mensaje: 'Allowed_ips eliminado'})

    } catch (error) {
        console.log(error)
        res.status(500).send({status: 500, error:error.message})
        
    }
}
module.exports={
   getallowed_ips,
   postallowed_ips,
   putallowed_ips,
   deleteallowed_ips

}