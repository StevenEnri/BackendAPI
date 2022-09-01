const {Pool} = require('pg');

const servidorDB = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'servidorDB',
    user: 'postgres',
    password: '123456'

});

module.exports={
    servidorDB
}