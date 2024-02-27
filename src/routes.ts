import express from 'express';
import PurchaseController from './controllers/PurchaseController';

const router = express.Router();

/* import ProductController from '../controllers/ProductController.js'; */

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.get('/purchases', PurchaseController.getPurchases);
router.post('/purchases', PurchaseController.createPurchase); 

// Rutas para productos
/* router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct); */


// Exportar el router
export default router;