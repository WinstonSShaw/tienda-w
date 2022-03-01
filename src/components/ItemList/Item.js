import * as React from 'react';


import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import './Item.css';


export default function Item({data}) {
  return (
      <Card className="tarjeta" style={{margin:40}} sx={{ maxWidth: 345 }}>
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
            $ {data.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Disponible: {data.count}
          </Typography>
        </CardContent>

    </Card>
    
  );
}
