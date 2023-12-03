import {
  createSupporters,
  fetchSupporters,
} from 'controllers/supporters-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchSupporters).post(createSupporters);

export default router;
