import {
  createProject,
  deleteProject,
  fetchProjects,
  updateProject,
} from 'controllers/projects';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchProjects).post(createProject);

router.route('/:id').put(updateProject).delete(deleteProject);

export default router;
