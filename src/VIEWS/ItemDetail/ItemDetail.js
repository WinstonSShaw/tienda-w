
import React, {useContext} from 'react';

import {Card, CardContent, CardMedia, Typography} from '@mui/material';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//COMPONENTS
import ItemCount from '../../components/ItemCount/ItemCount';

//CONTEXT
import { CartContext } from '../../Context/CartContext';


export default function ItemDetail({data}) {
  const [cartItems, setCartItems, addNewItem, cantComprar, cantContador, deleteItem] = useContext(CartContext);

  //console.log('DATA', cartItems);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Stock disponible: {data.count}
        </Typography>
      </CardContent>

      <ItemCount stock={data.count} inicial ={1} />
      

      <Link to={`/cart`}>
        {cartItems === 0 ? null : <button style={{margin:10}} onClick={() => addNewItem(data.id, data.title, data.price, data.description, data.category, data.image, data.count)}  >Comprar</button>}
                
      </Link>

      <button onClick={() => deleteItem(data.id)}>Borrar</button>
      


    </Card>
  );
}
