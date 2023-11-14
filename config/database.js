import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgresql://username:password@localhost:5433/test")
