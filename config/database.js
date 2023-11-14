import { config } from "dotenv";
import { Sequelize } from "sequelize";

config()
export const sequelize = new Sequelize(process.env.DB_URL)
