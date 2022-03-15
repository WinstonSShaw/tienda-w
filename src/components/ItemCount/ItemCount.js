import React, {useState, useContext} from 'react';
import "./ItemCount.css";


import { CartContext } from '../../Context/CartContext';

const ItemCount = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [cartItems, setCartItems, addNewItem, cantComprar , cantContador] = useContext(CartContext);




    const contadorUp = () =>{
        
        setContador(contador === stock ? contador = stock : contador +1);
        
    };

    const contadorDown = () =>{

        setContador(contador === 1 ? contador = 1 : contador -1);
    };

    const Agregar = () => {
        alert(`Cantidad confirmada (${contador}), apriete AGREGAR para sumar el producto al carrito`)
        cantContador(contador);

    }



    return(
        <div className='divContador'>
  
            <div>
                <p>Cantidad: {contador}</p>
            <div>
            <button className='botones' onClick={contadorDown} >-</button>
            <button className='botones' onClick={contadorUp} disabled={stock === 0 ? true : false}>+</button>
            
            </div>
                <button className='botones' onClick={Agregar}>Confirmar Cantidad</button>
            </div>
       
        </div>

    );
}


export default ItemCount;