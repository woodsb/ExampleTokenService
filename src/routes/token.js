import express from 'express';
import { getToken } from '../controllers/tokenController';

const router = express.Router();

/* GET users listing. */
router.get('/', getToken);

export default router;
