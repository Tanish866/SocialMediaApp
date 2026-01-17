import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { memo, useState } from 'react';

function PostCard({authorName, image, content}) {

  const [ isLike, setIsLike ] = useState(false);

  return (
    <Card sx={{ maxWidth: 345, mb: '3rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorName?.charAt(0) || "?"}
          </Avatar>
        }
        title={authorName}
        subheader="September 14, 2016"
      />
      {(image.length > 0) ? 
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        /> : null
      }

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {
            (isLike) ? <FavoriteIcon sx={{color : red[500]}} onClick={() => setIsLike(!isLike)}/> : <FavoriteBorderIcon onClick={() => setIsLike(!isLike)}/>
          }
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default React.memo(PostCard);