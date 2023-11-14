import { Router } from "express";
import ActivityController from './activity.controller.js';

const router = Router();

router.get('/', (req, res) => ActivityController.getActivities(req, res))

export default router;
