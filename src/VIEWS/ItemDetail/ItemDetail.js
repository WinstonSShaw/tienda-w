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

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ItemDetail({data}) {
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
      </CardContent>

    </Card>
  );
}
