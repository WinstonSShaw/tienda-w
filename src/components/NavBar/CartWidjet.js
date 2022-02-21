import { margin } from "@mui/system";
import React, {useContext} from "react";


import cartImg from "../../assets/Carrito.png";

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

import { CartContext } from "../../Context/CartContext";

/*
<Link to={`/detail/${product.char_id}`} className='Link'>
    <Item data={product} key={product.char_id} />
</Link>}
*/

const Cart = () => {
    const [cartItems, setCartItems] = useContext(CartContext);

    return (
        <div className="div-carrito">
            
            <img className="navbar-carrito" src={cartImg} alt="Carrito" />
            <p>{cartItems}</p>
            <Link to={`/cart`}>
                {cartItems === 0 ? null : <button style={{margin:10} }>Comprar</button>}
                
            </Link>
            


            
            

            
            
        </div>
        
    )

};

export default Cart;