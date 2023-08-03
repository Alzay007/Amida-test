import { useEffect } from 'react';
import { removeItem, setSumOfItems } from 'features/reducers/cartSlice';
import {
  selectItems,
  useAppDispatch,
  useAppSelector
} from 'features/hooks/hooks';

import './CartItem.scss';

interface Props {
  title: string;
  image: string;
  price: number;
  id: number;
}

export const CartItem: React.FC<Props> = ({ image, title, price, id }) => {
  const goods = JSON.parse(localStorage.getItem('id') || '{}');
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);

  const count = items.filter((item) => item === String(id)).length;

  useEffect(() => {
    dispatch(setSumOfItems({ id, price, count }));
  }, []);

  const handleRemoveItem = () => {
    goods.splice(goods.indexOf(id), 1);
    localStorage.setItem('id', JSON.stringify(goods));
    dispatch(removeItem(String(id)));
  };

  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div className="cart-item-title">{title}</div>
      <div className="cart-item-price">{price} грн</div>
      <div className="remove-btn" onClick={handleRemoveItem}>
        &times;
      </div>
    </div>
  );
};
