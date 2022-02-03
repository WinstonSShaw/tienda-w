import * as React from 'react';
// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';

import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';



export default function MediaCard({data}) {
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
          {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>

      <ItemCount stock={5} inicial ={1}/>

    </Card>
  );
}
