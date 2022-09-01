const jwt = require('jsonwebtoken');

function generarToken(suc_user, suc_pass)
{
    const payload={
        usuario: suc_user,
        contrasena: suc_pass
    };

    const token =jwt.sign(payload, 'contrasena',{
        expiresIn: '48h'
    });

    return token;

}

module.exports ={
    generarToken

}