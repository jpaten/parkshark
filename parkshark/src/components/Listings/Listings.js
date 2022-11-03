import React from 'react';
import styled from "styled-components";

class Listings extends React.Component {
    render(){
      return (
        // Important! Always set the container height explicitly
        <MainPanel1>
        </MainPanel1>
      );
    }
  }
  
  const MainPanel1 = styled.div`
      display: flex;
      flex-direction: column;
      padding: 10px 50px;
      align-items: flex-start;
      min-height: 1000px;
      background-image: url("https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/628530cd5d1a5f31f0381604/img/home@1x.png");
      background-color: black;
    `;

  export default Listings;