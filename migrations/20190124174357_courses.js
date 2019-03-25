exports.up = function(knex, Promise) {
    return knex
    .schema
    .createTable( 'courses', function( coursesTable ) {

            // Primary Key
            coursesTable.increments();
            // Data
            coursesTable.string( 'name', 50 ).notNullable();
            coursesTable.string( 'description', 50 ).notNullable();
            } )
};
exports.down = function(knex, Promise) {
    return knex
        .schema
            .dropTableIfExists( 'courses' );

};