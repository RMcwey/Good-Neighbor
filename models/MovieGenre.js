const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init(
  {
    genre_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'genres',
  }
);

module.exports = Genre;
