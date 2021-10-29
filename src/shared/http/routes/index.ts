import routes from '@shared/utils';
import productsRouter from '@modules/products/routes/products.routes';

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem Vindo!' });
});

routes.use("/products", productsRouter);

export default routes;
