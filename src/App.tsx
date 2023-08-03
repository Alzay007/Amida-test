import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Loader } from './components/Loader';
import {
  selectItems,
  useAppDispatch,
  useAppSelector
} from './features/hooks/hooks';
import { fetchProducts } from './features/reducers/thunk';
import { addItems } from './features/reducers/cartSlice';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const { isLoading, products } = useAppSelector(
    (state) => state.productsReducer
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());

    const cartId = window.localStorage.getItem('id');

    if (cartId && JSON.parse(cartId).length > 0) {
      dispatch(addItems(JSON.parse(cartId)));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('id', JSON.stringify(items));
  }, [items]);

  const toggleCartVisibility = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  return (
    <div className="App">
      <Header
        onCartClick={toggleCartVisibility}
        cartItemsCount={items.length}
      />
      <div className="container">
        <h1 className="title">Каталог товарів</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ProductList products={products} />
            {isCartOpen && <Cart handleClose={toggleCartVisibility} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
