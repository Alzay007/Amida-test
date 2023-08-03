import { Product } from 'types/Product';
import { ProductCard } from '../ProductCard';

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
