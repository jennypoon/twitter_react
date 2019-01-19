
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', function (table){
    table.increments('id').primary();
    table.string('user_id').notNull();
    table.text('profile_img');
    table.text('message').notNull();
    table.integer('like')
  })
};

exports.down = function(knex, Promise){
  return knex.schema.dropTable('tweets');
};

