import { addItem, removeItem } from 'features/reducers/cartSlice';
import { useAppDispatch, useAppSelector } from 'features/hooks/hooks';
import { Product } from 'types/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((state) => state.cartReducer);

  const itemsSet = new Set(items);
  const isCardInArray = itemsSet.has(product.id + '');

  const handleSetCardInData = () => {
    if (!isCardInArray) {
      dispatch(addItem(String(product.id)));
    } else {
      dispatch(removeItem(String(product.id)));
    }
  };

  const buttonStyle = {
    backgroundColor: isCardInArray ? 'gray' : ''
  };

  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ objectFit: 'contain', height: '300px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Price: {product.price} грн</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={handleSetCardInData}
          style={buttonStyle}
        >
          {isCardInArray ? 'Додано у кошик' : 'У кошик'}
        </button>
      </div>
    </div>
  );
};
