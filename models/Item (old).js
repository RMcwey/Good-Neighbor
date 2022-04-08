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
    item_name: {
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
    movie_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    is_avialable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    movie_contributor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
  }
);

module.exports = Movie;
