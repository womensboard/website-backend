import {
  createNigerianYouthVoice,
  deleteNigerianYouthVoice,
  fetchNigerianYouthVoices,
  updateNigerianYouthVoice,
} from 'controllers/nigerian-youth-voices';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchNigerianYouthVoices).post(createNigerianYouthVoice);

router
  .route('/:id')
  .put(updateNigerianYouthVoice)
  .delete(deleteNigerianYouthVoice);

export default router;
