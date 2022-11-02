import React, {Component} from 'react';
import "./Listings.css";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import SpotCard from './SpotCard';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      spots: []
    };
  }

  async componentDidMount() {
    axios.get('https://b589f463-b465-495d-8886-d7ac370f8eac.mock.pstmn.io/testtwo')
        .then(({ data}) => {  
          this.setState({ spots: data });
          console.log(this.state.spots);})
        .catch(e => console.log(e))
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 2000)
}

  render() {
    if (this.state.spots.length > 0)
      return (
          <Box sx={{ flexGrow: 1 }} >
            <Grid xs={0} sm={2}></Grid>
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