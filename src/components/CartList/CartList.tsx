import { Product } from 'types/Product';
import { CartItem } from '../CartItem/CartItem';

interface Props {
  cartList: Product[];
}

export const CartList: React.FC<Props> = ({ cartList }) => {
  return (
    <div className="cartList">
      <div className="cartList__wrapper">
        {cartList.map((product: Product) => (
          <CartItem
            key={+product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};
