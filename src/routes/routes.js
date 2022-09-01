const{Router}=require('express');


const sucursal_controller= require('../controller/sucursal.controller');
const nodo_controller= require('../controller/nodo.controller');
const cliente_controller= require('../controller/cliente.controller');
const server_controller= require('../controller/server.controller');
const allowed_controller= require('../controller/allowed.controller');
const clienteserver_controller= require('../controller/cliente-server.controller');
const mildware=require('../mildware/token.mildware')
const route = Router();


route.post('/login', sucursal_controller.postLogin)
route.get('/sucursal', mildware.protegerRuta,sucursal_controller.getSucursal);
route.post('/sucursal', sucursal_controller.postSucursal);
route.put('/sucursal', sucursal_controller.putSucursal);
route.delete('/sucursal', sucursal_controller.deleteSucursal);


route.get('/nodo', nodo_controller.getNodo);
route.post('/nodo', nodo_controller.postNodo);
route.put('/nodo', nodo_controller.putNodo);
route.delete('/nodo', nodo_controller.deleteNodo);


route.get('/cliente', cliente_controller.getCliente);
route.post('/cliente', cliente_controller.postCliente);
route.put('/cliente', cliente_controller.putCliente);
route.delete('/cliente', cliente_controller.deleteCliente);


route.get('/server', server_controller.getServer);
route.post('/server', server_controller.postServer);
route.put('/server', server_controller.putServer);
route.delete('/server', server_controller.deleteServer);


route.get('/allowed', allowed_controller.getallowed_ips);
route.post('/allowed', allowed_controller.postallowed_ips);
route.put('/allowed', allowed_controller.putallowed_ips);
route.delete('/allowed', allowed_controller.deleteallowed_ips);

route.get('/clienteserver', clienteserver_controller.getClienteServer);
route.post('/clienteserver', clienteserver_controller.postClienteServer);
route.delete('/clienteserver', clienteserver_controller.deleteClienteServer);




module.exports=route;