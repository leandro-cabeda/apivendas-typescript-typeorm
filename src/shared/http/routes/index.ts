import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem Vindo!' });
});

routes.use("/products", productsRouter);

export default routes;
