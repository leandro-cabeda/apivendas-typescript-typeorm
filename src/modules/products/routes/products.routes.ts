import ProductsController from '@modules/products/controllers/ProductsController';
import router from '@shared/utils';

const productsController = new ProductsController();

router.get('/', productsController.index);
router.get('/:id', productsController.show);
router.post('/', productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);

export default router;
