import { Router } from "express";
import UserController from './user.controller.js';

const router = Router();

router.post('/', (req, res) => UserController.createUser(req, res))

export default router