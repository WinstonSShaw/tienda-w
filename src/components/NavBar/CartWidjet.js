import React, {useContext} from "react";

import cartImg from "../../assets/Carrito.png";

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//CONTEXT
import { CartContext } from "../../Context/CartContext";

/*
<Link to={`/detail/${product.char_id}`} className='Link'>
    <Item data={product} key={product.char_id} />
</Link>}
*/

const Cart = () => {
    const [cartItems, setCartItems, addNewItem, cantComprar, cantContador, deleteItem, clearCart] = useContext(CartContext);
    const total = cartItems.reduce((acc, value) => acc + value.comprar, 0);

    return (
        <div className="div-carrito">
            
            <img className="navbar-carrito" src={cartImg} alt="Carrito" />
            <p>{total}</p>
            <Link to={`/cart`}>
                {cartItems === 0 ? null : <button style={{margin:10} }>Comprar</button>}
                
            </Link>
            <button style={{margin:10}} onClick={() => clearCart()}>Limpiar</button>


            
            

            
            
        </div>
        
    )

};

export default Cart;