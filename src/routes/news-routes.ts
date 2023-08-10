import { Router } from 'express';
import {
  createNews,
  fetchNews,
  deleteNews,
  updateNews,
} from 'controllers/news-controller';

const router = Router();

router.route('/').get(fetchNews).post(createNews);

router.route('/:id').delete(deleteNews).put(updateNews);

export default router;
