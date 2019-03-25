exports.up = function(knex, Promise) {
    return knex
    .schema
    .createTable( 'submissions', function( submissionsTable ) {

            // Primary Key
            submissionsTable.increments();
            // Data
            submissionsTable.integer('courseId', 10).notNullable();
            submissionsTable.integer( 'exerciseId', 10 ).notNullable();
            submissionsTable.string( 'content', 500 ).notNullable();
            submissionsTable.string( 'userName', 50 ).notNullable();
            } )
};
exports.down = function(knex, Promise) {
    return knex
        .schema
            .dropTableIfExists( 'submissions' );

};