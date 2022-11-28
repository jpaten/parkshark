import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import './BookingCard.css'
axios.defaults.baseURL = 'http://localhost:5000';

const ResultCard = styled(Card)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    width: "300px",
    position: 'relative',
    backgroundColor: 'rgb(245,245,250)'
}))

class BookingCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            booking: [],
            user: []
        };
        axios.get("bookings/" + props.result)
        .then(res => {
            console.log(res);
            this.setState({ booking: res.data});
        })
        .catch(e => console.log(e));

        axios.get("users/" + this.state.booking.renter_id)
            .then(res => {
                console.log(res);
                this.setState({ user: res.data});
            })
        .catch(e => console.log(e));
    }

    render() {
        return (
        <Grid item xs={12} sm={6} md={4}>
            <ResultCard className="card">
                <CardActionArea >
                    <CardContent height="200px">
                        <Typography gutterBottom variant="subtitle1" component="div" textAlign="left">
                            Renter - {this.state.user.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" textAlign="left">
                            Email - {this.state.user.email}
                        </Typography>
                    </CardContent>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Booking id: {this.state.booking._id}       
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Booking start time: {this.state.booking.start_time}       
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Booking end time: {this.state.booking.end_time}       
                        </Typography>
                </CardActionArea>
                <div style={{float: "left"}}>
                </div>
            </ResultCard>
        </Grid>
        );
    }    
}

export default BookingCard;