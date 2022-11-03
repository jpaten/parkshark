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
      render: false,
      spots: [],
      startDate: first,
      endDate: second
    };
  }

  async componentDidMount() {
    axios.get('https://b589f463-b465-495d-8886-d7ac370f8eac.mock.pstmn.io/testtwo')
        .then(({ data}) =>
          this.setState({ spots: data }))
        .then(({ data}) => {
          this.setState({ spots: data });
          console.log(this.state.spots);})
        .catch(e => console.log(e))
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 2000)
}
  search() {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
  }

  render() {
    if (this.state.spots.length > 0)
      return (
          <Box mt={2} sx={{ flexGrow: 1 }} >
            <Grid xs={0} sm={2}></Grid>
            <div className='filter' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <TextField
                label="First Day"
                type="date"
                defaultValue={this.state.startDate}
                onChange={date =>
                  this.setState({startDate: Date.parse(new Date(date.target.value)) / 1000}, this.search)}
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
              <Button onClick={this.search}> search</Button>
            </div>
            <Grid className= "grid" container spacing={5} alignItems="center" justifyContent="center" >
              {this.state.spots.map((spot) => {
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