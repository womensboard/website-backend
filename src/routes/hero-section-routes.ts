import { fetchHero, updateHero } from 'controllers/hero-section-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchHero).put(updateHero);

export default router;
