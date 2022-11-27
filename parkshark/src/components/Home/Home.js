import './Home.css';
import React, {Component} from 'react';
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker.tsx";
import { render } from 'react-dom';

const key = {"key": ""};
class MainContent2 extends Component{

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
        console.log(data);
        var pulledMarkerList = [];
        for (let spot in data.smth){
          let lat = spot.lat;
          let lng = spot.lat;
          let addr = spot.addr;
          let id = spot.id;
          pulledMarkerList += {key:id, lat:lat, lng:lng, name:addr}
        }
      });
  }

  onMarkerClick(marker){
    //this.props.center.lat = marker.lat;
    //this.props.center.lat = marker.lng;
    //this.props.zoom = this.props.zoom + 2;
    alert("marker named: " + marker.name);
  };

  render() {
    return(
      <MainPanel1>
            <div style={{ height: '80vh', width: '80%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: key["key"]}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
              {markerList.map(marker =>
                <Marker
                  onClick={(marker) => this.onMarkerClick(marker)}
                  key={marker.key}
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



var markerList = [
  {key:1, lat:34.05, lng:241.615, name:"My secret address1"},
  {key:2, lat:34.06, lng:241.62, name:"My secret address2"},
  {key:3, lat:34.07, lng:241.63, name:"My secret address3"},
  {key:4, lat:34.15, lng:241.63, name:"My secret address4"}
]


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