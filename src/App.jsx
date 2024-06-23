import Modal from './components/Modal';
import { useSelector, useDispatch } from "react-redux";
import { cartReducers } from './store';

import "./App.css";
import Products from './components/Products';
import { formatter } from './utils/utils';

function App() {
    const isShowing = useSelector(state => state.cartIsShown);
    const cartItemNumbers = useSelector(state => state.items?.length) || 0;
    const cartItems = useSelector(state => state.items) || [];
    const dispatch = useDispatch();

    const TOTAL = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

    function handleCart() {
        dispatch(cartReducers.toggleCart());
    }

    function handleDecrease(id) {
        dispatch(cartReducers.removeItem(id));
    }

    function handleIncrease(id) {
        dispatch(cartReducers.increaseItem(id));
    }

    return (
        <>
            <button
                onClick={handleCart}
                data-items-number={cartItemNumbers}
                id='cart-button'>
                Show Cart
            </button>
            <Modal open={isShowing}>
                <div className="cart">
                    <h1>Your Cart</h1>
                    {cartItemNumbers > 0 &&
                        <div className="content">
                            <ul className="cart-items">
                                {
                                    cartItems && cartItems.map(item => {
                                        return (
                                            <li className='cart-item' key={item.id}>
                                                <span>{item.name}</span>
                                                <div className="actions">
                                                    <button className="decrease" onClick={() => { handleDecrease(item.id) }}>
                                                        -
                                                    </button>
                                                    <span>x{item.quantity}</span>
                                                    <button className="increase" onClick={() => { handleIncrease(item.id) }}>
                                                        +
                                                    </button>
                                                </div>
                                                <span>
                                                    {formatter.format(item.totalPrice)}
                                                </span>
                                            </li>
                                        );
                                    })
                                }
                            </ul>

                            <p className='cart__total__price'>Your total: {formatter.format(TOTAL)}</p>
                        </div>
                    }
                    {!cartItems && <p>You have no item.</p>}
                    <button
                        className='cart__close__button'
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
