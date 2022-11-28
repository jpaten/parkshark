import './Home.css';
import React, {Component} from 'react';
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker.tsx";
import {Redirect} from "react-router-dom";

const key = {"key": ""};
class MainContent2 extends Component{
  constructor(props) {
    super(props);
    this.state = {markerList: [], doRedirect: false, redirectId: ""};
    //this.state =
  }

  static defaultProps = {
    center: {
      lat: 34.0500000,
      lng: 241.61502627
    },
    zoom: 11
  };

  componentDidMount() {
    fetch('/listings')
      .then((response) => response.json())
      .then((data) => {
        let pulledMarkerList = [];
        for (let spot in data) {
          if(data[spot].location && data[spot].address) {
            let lat = data[spot].location.coordinates[1];
            let lng = data[spot].location.coordinates[0];
            let addr = data[spot].address.line_1;
            let key = data[spot]._id;
            pulledMarkerList.push({key: key, lat: lat, lng: lng, name: addr})
          }
        }
        this.setState({
            markerList: pulledMarkerList
          });
        //markerList = pulledMarkerList;
      });
  }

  onMarkerClick(marker){
    //this.props.center.lat = marker.lat;
    //this.props.center.lat = marker.lng;
    //this.props.zoom = this.props.zoom + 2;
    console.log(marker.target.id);
    this.setState({doRedirect: true, redirectId: marker.target.id});
  };

  render() {
    console.log(this.state.markerList)
    if(this.state.doRedirect){
      return(
        <Redirect to={`/listing/${this.state.redirectId}`}/>
      )
    }
    return(
      <MainPanel1>
            <div style={{ height: '80vh', width: '80%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: key["key"]}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
              {this.state.markerList.map(marker =>
                <Marker
                  onClick={(marker) => this.onMarkerClick(marker)}
                  spotId={marker.key}
                  lat={marker.lat}
                  lng={marker.lng}
                  name={marker.name}
                />
              )}
              </GoogleMapReact>
            </div>
          </MainPanel1>
    )
  }
}





const MainPanel1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 50px;
    align-items: flex-start;
    min-height: 1500px;
    background-image: url("https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/628530cd5d1a5f31f0381604/img/home@1x.png");
    background-color: black;
  `;

export default MainContent2;