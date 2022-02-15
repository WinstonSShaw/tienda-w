import * as React from 'react';


import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import './Item.css';


export default function Item({data}) {
  return (
      <Card className="tarjeta" style={{margin:40}} sx={{ maxWidth: 345 }}>
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
        </CardContent>

    </Card>
    
  );
}
