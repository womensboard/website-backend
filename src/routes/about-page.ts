import {
  createAboutPage,
  deleteAboutPage,
  fetchAboutPage,
  updateAboutPage,
} from 'controllers/about-page';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchAboutPage).post(createAboutPage);

router.route('/:id').put(updateAboutPage).delete(deleteAboutPage);

export default router;
