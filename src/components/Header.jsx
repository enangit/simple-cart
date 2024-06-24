import { useSelector, useDispatch } from "react-redux";
import { cartReducers } from "../store";
import "./Header.css";

const Header = () => {
    const cartItemNumbers = useSelector(state => state.totalQuantity);
    const dispatch = useDispatch();

    function handleCart() {
        dispatch(cartReducers.toggleCart());
    }

    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    Cart
                </a>
            </div>
            <nav className="nav">
                <ul role="navigation" className="nav__links">
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            Shop
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
            <button
                onClick={handleCart}
                data-items-number={cartItemNumbers}
                id='cart-button'
                className="button cart__button"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
            </button>
        </header >
    )
}

export default Header
