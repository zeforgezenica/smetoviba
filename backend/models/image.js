const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Image = sequelize.define(
  "Image",
  {
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: true }
);

module.exports = Image;
