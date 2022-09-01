const sucursal_model = require('../model/sucursal.model');
const token = require('../helpers/token.helpers')
async function getSucursal(req, res) {
    try {

        let sucursal;

        sucursal = await sucursal_model.obtenerSucursal()
        res.status(200).send({ status: 200, sucursal: sucursal })

    } catch (error) {

        res.status(500).send({ status: 500, error: error.message })

    }
}

async function postLogin(req, res) {
    let { suc_user, suc_pass } = req.body


    try {
        const user = await sucursal_model.obtenerSucursalUser(suc_user)

        if (user != undefined) {
            if (user.suc_pass == suc_pass) {
                const key = token.generarToken(suc_user, suc_pass)
                res.status(200).json({ mensaje: 'contraseña correcta', token: key })
            } else {
                res.status(401).json({ mensaje: 'credenciales incorrectas' })
            }
        } else {
            res.status(401).json({ mensaje: 'usuario no encontrado' })
        }
    } catch (error) {
        res.status(500).send({ ERROR: error.message })
    }
}

async function postSucursal(req, res) {
    const { direccion, suc_user, suc_pass } = req.body;
    try {

        const sucursal = await sucursal_model.insertarSucursal(direccion, suc_user, suc_pass);
        res.status(200).send({ mensaje: 'Sucursal Creada' })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 500, error: error.message })

    }
}

async function putSucursal(req, res) {
    const { id_sucursal, direccion, suc_user, suc_pass } = req.body;
    try {
        const sucursal = await sucursal_model.actualizarSucursal(id_sucursal, direccion, suc_user, suc_pass);
        res.status(200).send({ mensaje: 'Sucursal Actualizada' })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 500, error: error.message })

    }
}

async function deleteSucursal(req, res) {
    const { id_sucursal } = req.body;
    try {
        const sucursal = await sucursal_model.eliminarSucursal(id_sucursal);
        res.status(200).send({ mensaje: 'Sucursal eliminada' })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 500, error: error.message })

    }
}
module.exports = {
    getSucursal,
    postSucursal,
    putSucursal,
    deleteSucursal,
    postLogin

}