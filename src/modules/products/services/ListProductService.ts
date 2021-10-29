import { ProductRepository } from '@modules/products/typeorm/repositories/ProductsRepository';
import { getCustomRepository } from "typeorm";
import Product from '@modules/products/typeorm/entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const listProducts = await productsRepository.find();

    return listProducts;

  }
}

export default ListProductService;
