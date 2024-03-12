import express from 'express';
import PurchaseController from './controllers/PurchaseController';
import AuthController from './controllers/AuthController';
import CardController from './controllers/CardController';

const router = express.Router();

// Rutas de compras
router.get('/purchases', PurchaseController.getPurchases);
router.post('/purchases', PurchaseController.createPurchase); 

// Rutas de tarjetas

router.get('/cards', CardController.getCards);
router.post('/cards', CardController.createCard);


// Rutas de autenticación


router.post('/login', AuthController.login);
router.post('/register', AuthController.register);


// Exportar el router
export default router;