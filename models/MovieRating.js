const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
  {
    rating_full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating_abbrev: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [1]
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'ratings',
  }
);

module.exports = Rating;
