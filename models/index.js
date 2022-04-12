const User = require('./User');
const Movie = require('./Movie');
const Genre = require('./MovieGenre');
const Rating = require('./MovieRating');

User.hasMany(Movie, {
  foreignKey: 'movie_contributor',
  constraints: false
});

Movie.belongsTo(User, {
  foreignKey: 'movie_contributor',
  constraints: false
});

/* User.hasMany(Movie, {
  foreignKey: 'current_holder',
  constraints: false
});

Movie.belongsTo(User, {
  foreignKey: 'current_holder',
  constraints: false
}); */

Movie.hasOne(Genre, {
  foreignKey: 'genre_id',
  constraints: false
});

Movie.hasOne(Rating, {
  foreignKey: 'rating_id',
  constraints: false
});

Genre.belongsToMany(Movie, {
  foreignKey: 'genre_id',
  constraints: false,
  through: "MovieGenre"
});

Rating.belongsToMany(Movie, {
  foreignKey: 'rating_id',
  constraints: false,
  through: "MovieRating"
});

module.exports = { User, Movie, Rating, Genre };
