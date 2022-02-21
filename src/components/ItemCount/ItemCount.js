import React, {useState, useContext} from 'react';
import "./ItemCount.css";


import { CartContext } from '../../Context/CartContext';

const ItemCount = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [cartItems, setCartItems] = useContext(CartContext);




    const contadorUp = () =>{
        
        setContador(contador === stock ? contador = stock : contador +1);
        
    };

    const contadorDown = () =>{

        setContador(contador === 0 ? contador = 0 : contador -1);
    };

    const Agregar = () => {
        alert(`Agrego ${contador} objetos al carrito `)
        setCartItems(contador);

    }



    return(
        <div className='divContador'>
  
            <div>
                <p>Cantidad: {contador}</p>
            <div>
            <button onClick={contadorDown} >-</button>
            <button onClick={contadorUp} disabled={stock === 0 ? true : false}>+</button>
            
            </div>
                <button onClick={Agregar}>Agregar</button>
            </div>
       
        </div>

    );
}


export default ItemCount;