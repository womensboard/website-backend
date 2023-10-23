import {
  createManagement,
  deleteManagement,
  fetchManagements,
  updateManagement,
} from 'controllers/management-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchManagements).post(createManagement);

router.route('/:id').delete(deleteManagement).put(updateManagement);

export default router;
