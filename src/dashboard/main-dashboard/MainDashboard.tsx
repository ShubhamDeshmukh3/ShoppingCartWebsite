
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
import { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const MainDashboard: React.FC = () => {
    const [productState, setProductState] = useState(imageArray.map(image => ({
        quantity: 1,
        addedToCart: false
    })));

    const handleAddToCart = (index: number) => {
        const updatedProductState = [...productState];
        updatedProductState[index].addedToCart = true;
        setProductState(updatedProductState);
    };

    const incrementQuantity = (index: number) => {
        const updatedProductState = [...productState];
        updatedProductState[index].quantity += 1;
        setProductState(updatedProductState);
    };

    const decrementQuantity = (index: number) => {
        const updatedProductState = [...productState];
        if (updatedProductState[index].quantity > 1) {
            updatedProductState[index].quantity -= 1;
            setProductState(updatedProductState);
        }
    };
    return (
        <Grid container spacing={5} rowSpacing={5} rowGap={4} sx={{ px: 6 }}>
            {imageArray.map((image: any, index) => {
                const { quantity, addedToCart } = productState[index];
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
                                {addedToCart && (
                                    <>
                                        <Grid container spacing={4} sx={{ py: 1 }}>
                                            <Grid item xs><RemoveOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => decrementQuantity(index)}>-</RemoveOutlinedIcon></Grid>
                                            <Grid item xs><Typography variant='h5'>{quantity}</Typography></Grid>
                                            <Grid item xs><AddOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => incrementQuantity(index)}> </AddOutlinedIcon></Grid>
                                        </Grid>
                                    </>
                                )}
                                <Typography variant="body1" color="text.secondary">
                                    <Button variant='outlined' onClick={() => handleAddToCart(index)}>{addedToCart ? "Go to Cart" : "Add to Cart"}</Button>
                                </Typography>
                            </CardContent>
                            {!addedToCart &&
                                <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            }

                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default MainDashboard