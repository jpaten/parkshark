import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BookingCard from "./BookingCard";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';


class Bookings extends React.Component {

    constructor(props) {
      super(props)
        this.state = {
          listing_id: this.props.match.params.id,
          booking_ids: []
        };
        console.log(this.state.listing_id);
        axios.get("listings/" + this.state.listing_id)
            .then(res => {
            console.log(res.data);
            this.setState({ booking_ids: res.data.bookings_id});
            })
            .catch(e => console.log(e));
    }
    render() {
      let link = "http://localhost:3000/listing/" + this.state.listing_id;
      return (
        <div>
          <Box mt={3} sx={{ flexGrow: 1 }} >
          <a href={link}>
                  <button >
                      Return to Booking form
                  </button>
                </a>
            <div className='filter' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "20px", marginTop: "15px"}}>
              <Typography variant="title" color="text.primary">
                Bookings for listing {this.state.listing_id}
              </Typography>
            </div>
            <Grid className= "grid" container spacing={5} alignItems="center" justifyContent="center" >
              {this.state.booking_ids.map((booking) => {
                return (
                  <Grid item xs={'auto'} sm={'auto'}>
                    <BookingCard result = {booking}/>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </div>
      );
    }
  }

  export default Bookings;