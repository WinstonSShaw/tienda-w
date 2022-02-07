import React, {useState} from 'react';
import "./ItemCount.css";


const ItemCount = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);

    const contadorUp = () =>{
        
        setContador(contador === stock ? contador = stock : contador +1);
        
    };

    const contadorDown = () =>{

        setContador(contador === 0 ? contador = 0 : contador -1);
    };


    return(
        <div className='divContador'>
            <p>Cantidad: {contador}</p>
            <div>
                <button onClick={contadorDown} >-</button>
                <button onClick={contadorUp} disabled={stock === 0 ? true : false}>+</button>
                
            </div>
            
        </div>

    );
}


export default ItemCount;