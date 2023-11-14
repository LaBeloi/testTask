import { Router } from "express";
import UserController from './user.controller.js';

const router = Router();

router.post('/', (req, res, next) => UserController.createUser(req, res, next))

export default router