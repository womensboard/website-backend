import { createGallery, fetchGallery } from 'controllers/gallery-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchGallery).post(createGallery);

export default router;
