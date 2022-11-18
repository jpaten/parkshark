import './Home.css';
import React, { useState } from 'react';
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
// import key from '../../keys.json';

function MainContent2(){
  return(
    <MainPanel1>
          <div style={{ height: '80vh', width: '80%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyD6R-IIfz_JpU-14dpkhXpv6O2jUlrCt2c"}}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </MainPanel1>
  )
}

const defaultProps = {
  center: {
    lat: 34.0500000,
    lng: 241.61502627
  },
  zoom: 11
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MainPanel1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 50px;
    align-items: flex-start;
    min-height: 1000px;
    background-image: url("https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/628530cd5d1a5f31f0381604/img/home@1x.png");
    background-color: black;
  `;

export default MainContent2;