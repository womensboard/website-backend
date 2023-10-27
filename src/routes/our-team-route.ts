import { fetchOurTeam, updateOurTeam } from 'controllers/our-team-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchOurTeam).put(updateOurTeam);

export default router;
