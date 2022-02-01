import React, {useState} from 'react';
import "./ItemCount.css";


const ItemCount = (props) => {
    const [contador, setContador] = useState(props.inicial);

    const contadorUp = () =>{
        
        setContador(contador== props.stock ? contador = props.stock : contador +1);
    };

    const contadorDown = () =>{

        setContador(contador==0 ? contador = 0 : contador -1);
    };


    return(
        <div className='divContador'>
            <p>Cantidad: {contador}</p>
            <div>
                <button onClick={contadorDown} >-</button>
                <button onClick={contadorUp} disabled={props.stock === 0 ? true : false}>+</button>
                
            </div>
            
        </div>

    );
}

export default ItemCount;