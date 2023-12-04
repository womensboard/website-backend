import { Router } from 'express';
import {
  createActivities,
  fetchActivities,
  deleteActivities,
  updateActivities,
} from 'controllers/activities-controller';

const router = Router();

router.route('/').get(fetchActivities).post(createActivities);

router.route('/:id').delete(deleteActivities).put(updateActivities);

export default router;
