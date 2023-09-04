import {
  createUnCollaboration,
  deleteUnCollaborations,
  fetchUnCollaborations,
  updateUnCollaboration,
} from 'controllers/un-collaboration-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchUnCollaborations).post(createUnCollaboration);

router.route('/:id').put(updateUnCollaboration).delete(deleteUnCollaborations);

export default router;
