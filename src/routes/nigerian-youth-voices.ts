import {
  fetchNigerianYouthVoices,
  updateNigerianYouthVoice,
} from 'controllers/nigerian-youth-voices';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchNigerianYouthVoices).put(updateNigerianYouthVoice);

export default router;
