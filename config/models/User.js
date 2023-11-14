import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    accessibility: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [['High', 'Medium', 'Low']]
      }
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [['Free', 'Low', 'High']]
      }
    }
  }
)