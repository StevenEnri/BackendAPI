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
route.post('/sucursal', mildware.protegerRuta,sucursal_controller.postSucursal);
route.put('/sucursal', mildware.protegerRuta,sucursal_controller.putSucursal);
route.delete('/sucursal', mildware.protegerRuta,sucursal_controller.deleteSucursal);


route.get('/nodo', mildware.protegerRuta,nodo_controller.getNodo);
route.post('/nodo', mildware.protegerRuta,nodo_controller.postNodo);
route.put('/nodo', mildware.protegerRuta,nodo_controller.putNodo);
route.delete('/nodo', mildware.protegerRuta,nodo_controller.deleteNodo);


route.get('/cliente', mildware.protegerRuta,cliente_controller.getCliente);
route.post('/cliente', mildware.protegerRuta,cliente_controller.postCliente);
route.put('/cliente', mildware.protegerRuta,cliente_controller.putCliente);
route.delete('/cliente', mildware.protegerRuta,cliente_controller.deleteCliente);


route.get('/server', mildware.protegerRuta,server_controller.getServer);
route.post('/server', mildware.protegerRuta,server_controller.postServer);
route.put('/server', mildware.protegerRuta,server_controller.putServer);
route.delete('/server', mildware.protegerRuta,server_controller.deleteServer);


route.get('/allowed', mildware.protegerRuta,allowed_controller.getallowed_ips);
route.post('/allowed', mildware.protegerRuta,allowed_controller.postallowed_ips);
route.put('/allowed', mildware.protegerRuta,allowed_controller.putallowed_ips);
route.delete('/allowed', mildware.protegerRuta,allowed_controller.deleteallowed_ips);

route.get('/clienteserver', mildware.protegerRuta,clienteserver_controller.getClienteServer);
route.post('/clienteserver', mildware.protegerRuta,clienteserver_controller.postClienteServer);
route.delete('/clienteserver', mildware.protegerRuta,clienteserver_controller.deleteClienteServer);




module.exports=route;