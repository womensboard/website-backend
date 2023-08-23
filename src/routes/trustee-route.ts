import {
  createTrustee,
  deleteTrustee,
  fetchTrustees,
  updateTrustee,
} from 'controllers/trustees-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchTrustees).post(createTrustee);

router.route('/:id').delete(deleteTrustee).put(updateTrustee);

export default router;
