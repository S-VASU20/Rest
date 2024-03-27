import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CssBaseline } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Gallery=()=>{
    return(
        <div>
            
      <CssBaseline/>
      <Typography sx={{textAlign:'center',fontFamily:'fantasy',fontSize:'30px',color:'red',marginTop:'30px'}}> OUR RESTAURANT GALLERY 🍔</Typography>
      <Grid container spacing={0}>
        <Grid >
        <Card sx={{ maxWidth: 345 ,marginTop:'50px' ,marginRight:'50px',marginLeft:'30px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://as1.ftcdn.net/v2/jpg/01/76/33/14/1000_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg"
          alt="food"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           Desert items
          </Typography>
          <Typography variant="body2" color="text.secondary">
          There are a wide variety of desserts in western cultures, including cakes, cookies, biscuits, 
          gelatins, pastries, ice creams, pies, puddings, and candies.
          Fruit is also commonly found in dessert courses because of its natural sweetness.
          </Typography>
        </CardContent>
        <CardActions>
       
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px',marginRight:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.sanity.io/images/t34vvqit/production/f1ea9e363102704d394a8cfb4b16ee3fe87bb6af-3375x2250.jpg"
          alt="events"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Events/parties
          </Typography>
          <Typography variant="body2" color="text.secondary">
          we work with run events to attract a new customer base, as well as increase overall revenue
          of their venue. In fact, it's well known industry inside knowledge that events are one of the best ways to increase revenue, especially during off-peak days.
          </Typography>
        </CardContent>
        <CardActions>
       
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://i.pinimg.com/originals/73/e8/1e/73e81e35d3608652ee6caff81ffd90cc.jpg"
          alt="traditional food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Traditional food
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Traditional Indian food is renowned worldwide for its wonderful use of herbs and spices, and its diverse range of deep-fried snacks, pastries, curries
          gravies, sauces, rice dishes, tandoor-cooked meats, vegetable dishes, chutneys, breads and sweets.
            </Typography>
        </CardContent>
        <CardActions>

      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px',marginRight:'50px',marginLeft:'30px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.picxy.com/cache/2020/2/14/882e672f3ae08862880854b81d93a7a4.jpg"
          alt="Special dishes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Special mandi
             
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mandi or Kuzhi Manthi is one type of biryani dish made with meat (chicken or lamb),
          spices and rice. It originates from Saudi Arabia and the traditional dish of Yemen. 
          It is also popular in Malabar region of Kerala and Karnataka. 
          The word “mandi” comes from the Arabic word nada, meaning “dew”.
            
          </Typography>
        </CardContent>
        <CardActions>
       
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px',marginRight:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/65/37/80/executive-room.jpg"
          alt="Rooms"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hotel rooms
             
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Room service or in-room dining is a hotel service enabling guests to choose items of food
          and drink for delivery to their hotel room for consumption.
          Room service is organized as a subdivision within the food and beverage department of high-end hotel and resort properties
            
          </Typography>
        </CardContent>
        <CardActions>
        
      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid >
        <Card sx={{ maxWidth: 345,marginTop:'50px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://b.zmtcdn.com/data/pictures/0/20396240/d615f562573e80c77f2df5c94ef1c5c3_featured_v2.jpg"
          alt="Healthy food items"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                Healthy food
          </Typography>
          <Typography variant="body2" color="text.secondary">
         It can be a part of your diet even if you are trying to lose weight.
         Ordering the traditional variety of Sushi rolls rather than going for the modified version
         of it can fill up your tummy, while keeping your calorie intake in check

          </Typography>
        </CardContent>
        <CardActions>

      </CardActions>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </div>
  )
}
            
       
    

export default Gallery;