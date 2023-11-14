import express from 'express';
import session from 'express-session';
import apiRoutes from './routes.js';
import bodyParser from 'body-parser';
import { sequelize } from './config/database.js';
import errorHandler from './common/errorHandler.js';

const app = express(); 
const PORT = 3000;

app.use(bodyParser.json())
app.use(session({ secret: 'userTestTask', resave: false, saveUninitialized: true }))

app.use(apiRoutes)
app.use(errorHandler);

sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => console.log("Server is Successfully Running, and App is listening on port "+ PORT)); 
  })
  .catch((err) => {
    console.log(err)
  })