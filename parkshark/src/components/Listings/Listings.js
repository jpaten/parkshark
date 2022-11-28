import React, {Component} from 'react';
import "./Listings.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import SpotCard from './SpotCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
axios.defaults.baseURL = 'http://localhost:5000';

class Listings extends Component {

  constructor(props) {
    super(props);
    var curr = new Date();
    curr.setDate(curr.getDate()-3);
    var first = Date.parse(curr.toISOString().substring(0,10)) / 1000;
    curr.setDate(curr.getDate()+3);
    var second = Date.parse(curr.toISOString().substring(0,10)) / 1000;
    this.state = {
      city: "Any",
      render: false,
      spots: [],
      filteredSpots: [],
      startDate: first,
      endDate: second
    };

    axios.get("/listings")
      .then(res => {
        console.log(res.data);
        this.setState({ spots: res.data, filteredSpots: res.data});
      })
      .catch(e => console.log(e));
  }


  search() {
    var temp;
    if (this.state.city == "Any") {
      temp = this.state.spots.filter(spot => {
        let valid = false;
        spot.availability.forEach(time => {
          if (this.state.startDate > Date.parse(new Date(time.start_time)) / 1000 &
                this.state.endDate < Date.parse(new Date(time.end_time)) / 1000 &
                this.state.startDate < this.state.endDate) {
                  valid = true;
                }
          });
          return valid;
      }
      );
    }
    else {
      temp = this.state.spots.filter(spot => {
        let valid = false;
        spot.availability.forEach(time => {
          if (this.state.startDate > Date.parse(new Date(time.start_time)) / 1000 &
                this.state.endDate < Date.parse(new Date(time.end_time)) / 1000 &
                this.state.startDate < this.state.endDate & this.state.city == spot.address.city) {
                  valid = true;
                }
          });
          return valid;
      });
    }
    this.setState({filteredSpots: temp});
  }

  render() {
    if (this.state.spots.length > 0)
      return (
          <Box mt={2} sx={{ flexGrow: 1 }} >
            <h1 className="search-title">
              Search Listings
            </h1>
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
                  this.setState({
                    startDate: Date.parse(new Date(date.target.value)) / 1000
                  })}
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