import express from 'express';
import { getToken } from '../controllers/tokenController';

const router = express.Router();

/* GET users listing. */
router.get('/health', (req, res) => {
  res.status(200);
  req.send({
    status: 'ok',
  });
});

export default router;
