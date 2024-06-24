import Modal from './components/Modal';
import { useSelector, useDispatch } from "react-redux";
import { cartReducers } from './store';

import "./App.css";
import Products from './components/Products';
import { formatter } from './utils/utils';
import Header from './components/Header';

function App() {
    const isShowing = useSelector(state => state.cartIsShown);
    const cartItemNumbers = useSelector(state => state.totalQuantity);
    const cartItems = useSelector(state => state.items) || [];
    const dispatch = useDispatch();

    const TOTAL = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

    function handleCart() {
        dispatch(cartReducers.toggleCart());
    }

    function handleDecrease(id) {
        dispatch(cartReducers.removeItem(id));
    }

    function handleIncrease(item) {
        dispatch(cartReducers.addItem(item));
    }

    return (
        <>
            <Header />
            <Modal open={isShowing}>
                <div className="cart">
                    <h1>Your Cart</h1>
                    {cartItemNumbers > 0 &&
                        <div className="content">
                            <ul className="cart__items">
                                {
                                    cartItems && cartItems.map(item => {
                                        return (
                                            <li className='cart__item' key={item.id}>
                                                <span className='cart__item__name'>{item.name}</span>
                                                <span className='cart__item__price'>
                                                    {formatter.format(item.totalPrice)}
                                                </span>
                                                <div className="cart__item__actions">
                                                    <button className="button action__decrease" onClick={() => { handleDecrease(item.id) }}>
                                                        -
                                                    </button>
                                                    <span className='cart__item__quantity'>{item.quantity}</span>
                                                    <button className="button action__increase" onClick={() => { handleIncrease(item) }}>
                                                        +
                                                    </button>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>

                            <p className='cart__total__price'>Total: {formatter.format(TOTAL)}</p>
                        </div>
                    }
                    {!cartItems && <p>You have no item.</p>}
                    <button
                        className='button cart__close__button'
                        onClick={handleCart}>
                        close
                    </button>
                </div>
            </Modal>
            <Products />
        </>
    )
}

export default App
