import {
  fetchAboutFeatures,
  updateAboutFeatures,
} from 'controllers/about-feature-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchAboutFeatures).put(updateAboutFeatures);

export default router;
