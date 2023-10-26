import { createPartner, fetchPartners } from 'controllers/partners-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchPartners).post(createPartner);

export default router;
