import express from 'express';

const router = express.Router();

// Would include other health metrics, deep health check, version, etc in this router.
router.get('/', (req, res) => {
  res.status(200);
  res.send({
    status: 'ok',
  });
});

export default router;
