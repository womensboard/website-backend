import { fetchStrategy, updateStrategy } from 'controllers/strategy';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchStrategy).put(updateStrategy);

export default router;
