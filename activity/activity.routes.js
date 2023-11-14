import { Router } from "express";
import ActivityController from './activity.controller.js';

const router = Router();

router.get('/', (req, res, next) => ActivityController.getActivities(req, res, next))

export default router;
