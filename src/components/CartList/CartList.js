import React, {useContext} from "react";


//CONTEXT
import { CartContext } from "../../Context/CartContext";

//COMPONENTS
import CartCard from "./CartCard";

const CartList = () => {
    const [cartItems, setCartItems] = useContext(CartContext);

    
    return (

       
            <div className="cartList">
                {cartItems.map((item) => {
                    return <CartCard data={item} key={item.id} />
                })}
            </div>

            
        

        

    );

};

export default CartList;