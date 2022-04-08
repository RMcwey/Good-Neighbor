const sequelize = require('../config/connection');
const { User, Movie , Rating, Genre } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const ratingsData = require('./movieRatingData.json');
const genresData = require('./movieGenreData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Genre.bulkCreate(genresData, {
    individualHooks: true,
    returning: true,
  });

  await Rating.bulkCreate(ratingsData, {
    individualHooks: true,
    returning: true,
  });

  for (const movie of movieData) {
    await Movie.create({
      ...movie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };


  process.exit(0);
};

seedDatabase();
