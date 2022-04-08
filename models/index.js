const User = require('./User');
const Movie = require('./Movie');

User.hasMany(Movie, {
  foreignKey: 'movie_contributor'
});

Movie.belongsTo(User, {
  foreignKey: 'movie_contributor'
});

module.exports = { User, Movie };
