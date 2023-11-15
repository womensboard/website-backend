import {
  createCollaboration,
  deleteCollaboration,
  fetchCollaborationById,
  fetchCollaborations,
  filterCollaborationByYear,
  updateCollaboration,
} from 'controllers/un-collaboration-section-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchCollaborations).post(createCollaboration);

router
  .route('/:id')
  .delete(deleteCollaboration)
  .put(updateCollaboration)
  .get(fetchCollaborationById);

router.route('/:year').post(filterCollaborationByYear);

export default router;
