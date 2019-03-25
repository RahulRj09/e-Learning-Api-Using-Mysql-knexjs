module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        // seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: 'localhost',

            user: 'root',
            password: 'rahul',

            database: 'info',
            charset: 'utf8',


        }

    }
};
