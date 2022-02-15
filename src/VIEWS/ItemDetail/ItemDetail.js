/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const ItemDetail = () => {
    const [item, setItem] = useState([]);

    console.log(item);

    let id = useParams();
    let userId = id.id;

    console.log(userId);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${userId}`).then((res) => setItem(res.data));
    }, [userId]);

    return (
        <div>
            {character.map((it) => {
				return (
					<div key={it.id}>
						<ItemDetail data={it} />
					</div>
				);
			})}
        </div>

    )
}

export default ItemDetail;

*/

import {Card, CardContent, CardMedia, Typography} from '@mui/material';

//COMPONENTS
import ItemCount from '../../components/ItemCount/ItemCount';

export default function ItemDetail({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.nickname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.birthday}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.occupation}
        </Typography>
      </CardContent>

      <ItemCount stock={5} inicial ={1}/>


    </Card>
  );
}
