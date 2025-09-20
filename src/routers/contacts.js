import express from 'express';

import {
  getContactByIdController,
  getContactsController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper';

const router = express.Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.use((req, res, next) => {
  res.status(404).json({ status: 404, message: 'Not found' });
});

export default router;
