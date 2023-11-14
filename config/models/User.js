import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import { priceVars, accessibilityVars } from '../variables.js';

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
        isIn: [Object.values(accessibilityVars)]
      }
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [Object.values(priceVars)]
      }
    }
  }
)