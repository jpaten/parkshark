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

  async componentDidMount() {
          this.setState({ spots: [{
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Los Angeles",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/rruOElkPdRA",
            "price": 16,
            "availability": [{
              "start_time": 1667418341,
              "end_time": 1668282341
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Miami",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/yvfp5YHWGsc",
            "price": 25,
            "availability": [{
              "start_time": 1667481469,
              "end_time": 1669817869
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Los Angeles",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/vFtp6oJn2fA",
            "price": 20,
            "availability": [{
              "start_time": 1664889469,
              "end_time": 1665235069
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Miami",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/DeYFnqMx5S4",
            "price": 10,
            "availability": [{
              "start_time": 1667418341,
              "end_time": 1668282341
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Bay Area",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/W3x8pH2jD60",
            "price": 10,
            "availability": [{
              "start_time": 1667418341,
              "end_time": 1668282341
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Los Angeles",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/6QIefFMpHEY",
            "price": 10,
            "availability": [{
              "start_time": 1667395069,
              "end_time": 1669282341
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Miami",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/DkGUn0Y1VzA",
            "price": 10,
            "availability": [{
              "start_time": 1668176269,
              "end_time": 1668521869
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Los Angeles",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/9nXBuHKkafU",
            "price": 10,
            "availability": [{
              "start_time": 1660176269,
              "end_time": 1661521869
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "SF",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/HvxO34LKg00",
            "price": 10,
            "availability": [{
              "start_time": 1667418341,
              "end_time": 1668282341
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          },
          {
            "id": "",
            "location": {
              "type": "Point",
              "coordinates": [-73.856077, 40.848447]
            },
            "userid": "",
            "address": {
              "state": "CA",
              "city": "Los Angeles",
              "postal_code": "90034",
              "line_1": "",
              "line_2": ""
            },
            "description": "large and nonblocked, available next week",
            "image": "https://source.unsplash.com/-aLLUhMOm-w",
            "price": 10,
            "availability": [{
              "start_time": 1668176269,
              "end_time": 1668521869
            }],
            "bookings": [{
              "_id": "",
              "rentee_id": "",
              "starttime": "",
              "endtime": "",
              "createdAt": 1667418341,
              "updatedAt": 1668282341
            }],
            "createdAt": 1667677541,
            "updatedAt": 1667677541
          }
        ], filteredSpots: [{
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Los Angeles",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/rruOElkPdRA",
          "price": 16,
          "availability": [{
            "start_time": 1667418341,
            "end_time": 1668282341
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Miami",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/yvfp5YHWGsc",
          "price": 25,
          "availability": [{
            "start_time": 1667481469,
            "end_time": 1669817869
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Los Angeles",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/vFtp6oJn2fA",
          "price": 20,
          "availability": [{
            "start_time": 1664889469,
            "end_time": 1665235069
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Miami",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/DeYFnqMx5S4",
          "price": 10,
          "availability": [{
            "start_time": 1667418341,
            "end_time": 1668282341
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Bay Area",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/W3x8pH2jD60",
          "price": 10,
          "availability": [{
            "start_time": 1667418341,
            "end_time": 1668282341
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Los Angeles",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/6QIefFMpHEY",
          "price": 10,
          "availability": [{
            "start_time": 1667395069,
            "end_time": 1669282341
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Miami",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/DkGUn0Y1VzA",
          "price": 10,
          "availability": [{
            "start_time": 1668176269,
            "end_time": 1668521869
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Los Angeles",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/9nXBuHKkafU",
          "price": 10,
          "availability": [{
            "start_time": 1660176269,
            "end_time": 1661521869
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "SF",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/HvxO34LKg00",
          "price": 10,
          "availability": [{
            "start_time": 1667418341,
            "end_time": 1668282341
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        },
        {
          "id": "",
          "location": {
            "type": "Point",
            "coordinates": [-73.856077, 40.848447]
          },
          "userid": "",
          "address": {
            "state": "CA",
            "city": "Los Angeles",
            "postal_code": "90034",
            "line_1": "",
            "line_2": ""
          },
          "description": "large and nonblocked, available next week",
          "image": "https://source.unsplash.com/-aLLUhMOm-w",
          "price": 10,
          "availability": [{
            "start_time": 1668176269,
            "end_time": 1668521869
          }],
          "bookings": [{
            "_id": "",
            "rentee_id": "",
            "starttime": "",
            "endtime": "",
            "createdAt": 1667418341,
            "updatedAt": 1668282341
          }],
          "createdAt": 1667677541,
          "updatedAt": 1667677541
        }
      ] })
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
