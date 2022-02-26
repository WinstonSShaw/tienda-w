import React, {useContext} from "react";


//CONTEXT
import { CartContext } from "../../Context/CartContext";

//COMPONENTS
import CartCard from "./CartCard";

const CartList = () => {
    const [cartItems, setCartItems] = useContext(CartContext);

    console.log(`CarList: ${cartItems.length}`)
    return (

        <div>
            <div className="cartList">
                {cartItems.map((item) => {
                    return <CartCard data={item} key={item.id} />
                })}
            </div>

            <button>Terminar Compra</button>
        </div>

        

    );

};

export default CartList;