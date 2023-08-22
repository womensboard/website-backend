import {
  createEvent,
  deleteEvent,
  fetchEvent,
  updateEvents,
} from 'controllers/events-controller';
import { Router } from 'express';

const router = Router();

router.route('/').post(createEvent).get(fetchEvent);

router.route('/:id').put(updateEvents).delete(deleteEvent);

export default router;
