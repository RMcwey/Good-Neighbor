const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    publish_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    movie_genre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
      defaultValue: 9,
      references: {
        model: 'genres',
        key: 'genre_id'
      }
    },
    mpaa_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
      references: {
        model: 'ratings',
        key: 'rating_id'
      }
    },
    movie_description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "(No description given by the user.)",
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    movie_contributor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
        as: 'lender'
      },
    },
    current_holder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: {
        model: 'users',
        key: 'id',
        as: 'borrower'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'movies',
  }
);

module.exports = Movie;
