exports.up = function(knex, Promise) {
    return knex
    .schema
    .createTable( 'exercise', function( exerciseTable ) {

            // Primary Key
            exerciseTable.increments();
            // Data
            exerciseTable.integer('courseId', 10).notNullable();
            exerciseTable.string( 'name', 50 ).notNullable();
            exerciseTable.string( 'content', 500 ).notNullable();
            exerciseTable.string( 'hint', 50 ).notNullable();
            } )
};
exports.down = function(knex, Promise) {
    return knex
        .schema
            .dropTableIfExists( 'exercise' );

};