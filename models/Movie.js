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
      defaultValue: "9",
    },
    mpaa_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    movie_description: {
      type: DataTypes.STRING(200),
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
        model: 'user',
        key: 'mobileNumber',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;
