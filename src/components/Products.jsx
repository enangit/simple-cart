import { products } from "../assets/products.json";
import "./Products.css";
import { formatter } from "../utils/utils.js";
import { cartReducers } from "../store/index.js";
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    function handleAddItem(product) {
        dispatch(cartReducers.addItem(product));
    }

    console.log(items);
    return (
        <article className="products">
            {
                products.map(product => {
                    return (
                        <div
                            key={product.id}
                            className="product">
                            <div className="product__image">
                                <img src={`http://localhost:5173/src/assets/images/${product.imageSrc}`} alt="watch image" />
                            </div>
                            <div className="product__detail">
                                <h4>{product.name}</h4>
                                <p className="product__price">
                                    {formatter.format(product.price)}
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    handleAddItem(product)
                                }}
                                className="cart__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                    )

                })
            }
        </article>
    )
}

export default Products;
