const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Category = require("./category");
const User = require("./user");
const Image = require("./image");

const Location = sequelize.define(
  "Location",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    longitude: { type: DataTypes.FLOAT, allowNull: false },
    latitude: { type: DataTypes.FLOAT, allowNull: false },
    image: { type: DataTypes.STRING },
  },
  { timestamps: true }
);

Location.belongsTo(Category);
Location.belongsTo(User);
Location.hasMany(Image);

module.exports = Location;
