
import React, {useContext} from 'react';

import {Card, CardContent, CardMedia, Typography} from '@mui/material';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//COMPONENTS
import ItemCount from '../../components/ItemCount/ItemCount';

//CONTEXT
import { CartContext } from '../../Context/CartContext';
import { ClassNames } from '@emotion/react';

import './ItemDetail.css';


export default function ItemDetail({data}) {
  const [cartItems, setCartItems, addNewItem, cantComprar, cantContador, deleteItem] = useContext(CartContext);


  return (
    <Card sx={{ maxWidth: 345 }} className='contenedor'>
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
          Precio: ${data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock disponible: {data.count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        
        
      </CardContent>

      <ItemCount stock={data.count} inicial ={1} />
      
      <div>
        <Link to={`/cart`}>
          {cartItems === 0 ? null : <button style={{margin:10}} className='botones' onClick={() => addNewItem(data.id, data.title, data.price, data.description, data.category, data.image, data.count)}  >AGREGAR AL CARRITO</button>}
                  
        </Link>
        
      </div>

      
      


    </Card>
  );
}
