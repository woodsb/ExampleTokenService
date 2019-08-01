import express from 'express';
import { getToken } from '../controllers/tokenController';

const router = express.Router();

router.get('/', getToken);

export default router;
