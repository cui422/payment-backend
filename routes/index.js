import express from 'express';
import PaymentController from '../controllers/PaymentController';

const router = new express.Router();

router.post('/verifyPayment', (req, res) => {
  PaymentController.verify(req, res);
});

export default router;
