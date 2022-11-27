import React, {Component} from 'react';
import "./Listings.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import SpotCard from './SpotCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class Listings extends Component {

  constructor(props) {
    super(props);
    var curr = new Date();
    curr.setDate(curr.getDate()-3);
    var first = curr.toISOString().substring(0,10);
    curr.setDate(curr.getDate()+3);
    var second = curr.toISOString().substring(0,10);
    this.state = {
      city: "Any",
      render: false,
      spots: [],
      filteredSpots: [],
      startDate: first,
      endDate: second
    };
  }

  getListings(){
    fetch("/listings")
        .then((response) => response.json())
        .then((data) => this.setState({filteredSpots: data, spots: data}))
  }

  async componentDidMount() {
    this.getListings();
  }

  search() {
    var temp;
    if (this.state.city == "Any") {
      temp = this.state.spots.filter(spot =>
          this.state.startDate > spot.availability[0].start_time &
          this.state.endDate < spot.availability[0].end_time &
          this.state.startDate < this.state.endDate
      );
    }
    else {
      temp = this.state.spots.filter(spot =>
          this.state.startDate > spot.availability[0].start_time &
          this.state.endDate < spot.availability[0].end_time &
          this.state.city == spot.address.city &
          this.state.startDate < this.state.endDate
      );
    }
    this.setState({filteredSpots: temp});
  }

  render() {
    console.log(this.state.spots);
    if (this.state.spots.length > 0)
      return (
          <Box mt={2} sx={{ flexGrow: 1 }} >
            <Grid xs={0} sm={2}></Grid>
            <div className='filter' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "15px"}}>
              <TextField
                  label="City"
                  placeholder="Any"
                  onChange={newCity => this.setState({city: newCity.target.value})}
              />
              <TextField
                  label="First Day"
                  type="date"
                  defaultValue={this.state.startDate}
                  onChange={date =>
                      this.setState({startDate: Date.parse(new Date(date.target.value)) / 1000})}
                  InputLabelProps={{ shrink: true }}
              />
              <TextField

                  label="Last Day"
                  type="date"
                  defaultValue={this.state.endDate}
                  onChange={date => this.setState({
                    endDate: Date.parse(new Date(date.target.value)) / 1000
                  })}
                  InputLabelProps={{ shrink: true }}
              />
              <Button onClick={this.search.bind(this)}> search</Button>
            </div>
            <Grid className= "grid" container spacing={5} alignItems="center" justifyContent="center" >
              {this.state.filteredSpots.map((spot) => {
                return (
                    <Grid item xs={'auto'} sm={'auto'}>
                      <SpotCard result = {spot}/>
                    </Grid>
                )
              })}
            </Grid>
          </Box>
      );
  }
}

export default Listings;