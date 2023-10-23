import { fetchContact, updateContact } from 'controllers/contacts-controller';
import { Router } from 'express';

const router = Router();

router.route('/').get(fetchContact).put(updateContact);

export default router;
