const knex = require( 'knex' )( {

    client: 'mysql',
    debug: false,
    connection: {

        host: 'localhost',

        user: 'root',
        password: 'rahul',
        database: 'info',
        charset: 'utf8',


    }

} );
module.exports = knex
