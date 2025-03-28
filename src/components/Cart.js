import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () =>{

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className = "text-center m-4 p-4">
            <h2 className="text-2xl font-bold">Cart</h2>
            <div className = "w-6/12 m-auto">
            <button className ="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length === 0 &&
                <h2>Cart is empty pls add some items</h2>}
                <ItemList items = {cartItems}/>
            </div>
        </div>
    )
}
export default Cart;