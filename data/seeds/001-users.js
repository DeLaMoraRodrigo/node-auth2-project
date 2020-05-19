
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "User1", password: "password", department: "admin" },
        { username: "User2", password: "password", department: "finance" }
      ]);
    });
};
