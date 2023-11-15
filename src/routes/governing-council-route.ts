import {
  createGoverningCouncil,
  deleteGoverningCouncil,
  fetchGoverningCouncil,
  updateGoverningCouncil,
} from 'controllers/governing-council-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchGoverningCouncil).post(createGoverningCouncil);

router.route('/:id').delete(deleteGoverningCouncil).put(updateGoverningCouncil);

export default router;
