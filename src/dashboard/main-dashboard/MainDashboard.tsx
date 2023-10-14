
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { imageArray } from './imageArray';
import { Button, Grid } from '@mui/material';


const MainDashboard = () => {
    return (
        <Grid container spacing={5} rowSpacing={5} rowGap={4} sx={{ px: 6 }}>
            {imageArray.map((image: any) => {
                return (
                    <Grid item xs={3}>
                        <Card >
                            <CardMedia
                                component="img"
                                key={image.id}
                                height="194"
                                // width="450"
                                image={image.url}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    <Button variant='outlined'>Add to Cart</Button>
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default MainDashboard