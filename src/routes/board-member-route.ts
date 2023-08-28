import {
  createBoardMember,
  deleteBoardMember,
  fetchBoardMembers,
  updateBoardMember,
} from 'controllers/board-members-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchBoardMembers).post(createBoardMember);

router.route('/:id').delete(deleteBoardMember).put(updateBoardMember);

export default router;
