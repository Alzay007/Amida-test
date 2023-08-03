import { useMemo } from 'react';
import { Product } from 'types/Product';
import { useAppDispatch, useAppSelector } from 'features/hooks/hooks';
import { clearCart } from 'features/reducers/cartSlice';
import { CartList } from '../CartList/CartList';

import './Cart.scss';

interface CartProps {
  handleClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const { items, sumOfItems } = useAppSelector((state) => state.cartReducer);
  const { products } = useAppSelector((state) => state.productsReducer);

  const visibleList = useMemo(() => {
    return products.filter((product: Product) =>
      items.includes(String(product.id))
    );
  }, [items, products]);

  const sum = Object.values(sumOfItems).reduce((a, b) => a + b, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
    handleClose();
  };

  return (
    <div className="cart-container">
      <div className="d-flex justify-content-end">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
      </div>

      {items.length > 0 ? (
        <>
          <CartList cartList={visibleList} />
          <div className="cart-total">Загалом: {sum} грн</div>
          <button
            className="btn btn-danger clear-cart-btn"
            onClick={handleClearCart}
          >
            Очистити
          </button>
        </>
      ) : (
        <div className="empty-cart">Кошик пустий</div>
      )}
    </div>
  );
};
