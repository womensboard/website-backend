import {
  fetchValueMetrics,
  updateValueMetrics,
} from 'controllers/value-metrics';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchValueMetrics).put(updateValueMetrics);

export default router;
