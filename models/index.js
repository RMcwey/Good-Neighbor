const User = require('./User');
const Movie = require('./Movie');
const Genre = require('./MovieGenre');
const Rating = require('./MovieRating');

User.hasMany(Movie, {
  as: 'test1',
  foreignKey: 'contributor'
});

Movie.hasOne(User, {
  as: 'test2',
  foreignKey: 'contributor',
  constraints: false
});

User.hasMany(Movie, {
  as: 'test3',
  foreignKey: 'borrower',
  constraints: false
})

Movie.hasOne(User, {
  as: "test4",
  foreignKey: 'borrower',
  constraints: false
});

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
