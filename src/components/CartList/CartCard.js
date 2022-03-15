import React, {useContext} from 'react';

import './CartList.css';


import { Card, CardContent, CardMedia, Typography} from '@mui/material';

//CONTEXT
import { CartContext } from '../../Context/CartContext';

const CartCard = ({data}) => {
    const [cartItems, setCartItems, addNewItem, cantComprar, cantContador, deleteItem] = useContext(CartContext);


    return (
        <div>
            <Card className="tarjeta" style={{margin:40}} sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image={data.image}
                alt="green iguana"
                style={{objectFit:'contain'}}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    $ {data.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Cantidad: {data.comprar}
                </Typography>
                
                </CardContent>

                <button className='botones' onClick={() => deleteItem(data.id)}>Borrar</button>

            </Card>
        </div>

    );
};

export default CartCard;