import { ProductEntity } from '../../product/model/product.entity';

export class ApplicationEntity {
    id: number;
    name: string;
    description: string;
    products: ProductEntity[];
}