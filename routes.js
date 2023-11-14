import { Router } from 'express';
import activityRoutes from './activity/activity.routes.js';
import userRoutes from './user/user.routes.js';

const router = Router();

router.use('/activity', activityRoutes)
router.use('/user', userRoutes)

export default router
