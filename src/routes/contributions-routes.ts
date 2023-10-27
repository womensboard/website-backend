import {
  createContribution,
  deleteContribution,
  fetchContributionById,
  fetchContributions,
  filterContributionByYear,
  updateContribution,
} from 'controllers/contributions-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchContributions).post(createContribution);

router
  .route('/:id')
  .delete(deleteContribution)
  .put(updateContribution)
  .get(fetchContributionById);

router.route('/:year').post(filterContributionByYear);

export default router;
