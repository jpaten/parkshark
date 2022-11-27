import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

const ResultCard = styled(Card)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    width: "300px",
    height: '500px',
    position: 'relative',
    backgroundColor: 'rgb(245,245,250)'
}))

const SpotCard = ({result}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <a href={`/listing/${result._id}`}>
                <ResultCard>
                    <CardActionArea>
                        <CardMedia component="img" height="294" image={"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="Property Image" />
                        <CardContent height="200px">
                            <Typography gutterBottom variant="subtitle1" component="div" textAlign="left">
                                {result.address.city}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                {result.address.line_1}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                {result.address.line_2}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
                                {result.description}
                            </Typography>
                            <Typography variant="body2" color="text.primary" textAlign="left">
                                {new Date(result.availability[0].start_time).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' })} - {new Date(result.availability[0].end_time).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' })}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div style={{float: "left"}}>
                        <Typography variant="button" color="text.secondary" style={{position: "absolute", bottom: "2px"}} >
                            &#36;{result.price} / Day
                        </Typography>
                    </div>
                </ResultCard>
            </a>
        </Grid>
    )
}

export default SpotCard;