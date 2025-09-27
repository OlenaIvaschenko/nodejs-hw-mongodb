import express from 'express';

import {
  createStudentController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = express.Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId',isValidId, ctrlWrapper(getContactByIdController));

router.post('/contacts', validateBody(createContactSchema), ctrlWrapper(createStudentController));

router.patch('/contacts/:contactId', isValidId, ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.use((req, res, next) => {
  res.status(404).json({ status: 404, message: 'Not found' });
});



export default router;
