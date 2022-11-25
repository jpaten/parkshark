import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import carImg from "./parked.jpg";
import carOutline from "./yellowCarOutline.png";
import './About.css';

export const PoppinsBoldWhite64px = css`
    color: var(--primary-font);
    font-family: var(--font-family-poppins);
    font-size: 64px;
    font-weight: 700;
    font-style: normal;
`;

export const PoppinsNormalPaleSky16px = css`
  color: var(--font-secondary);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-m2);
  font-weight: 400;
  font-style: normal;
`;

export const PoppinsBoldPacificBlue48px = css`
  color: var(--primary);
  font-family: var(--font-family-poppins);
  font-size: 48px;
  font-weight: 700;
  font-style: normal;
`;

export const PoppinsBoldPacificBlue36px = css`
  color: var(--primary);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  font-style: normal;
`;

export const PoppinsBoldPacificBlue24px = css`
  color: var(--primary);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-l22);
  font-weight: 700;
  font-style: normal;
`;

export const PoppinsBoldPacificBlue20px = css`
    color: var(--primary);
    font-family: var(--font-family-poppins);
    font-size: var(--font-size-l);
    font-weight: 700;
    font-style: normal;
`;

const FlexRow1 = styled.div`
  margin-top: 68px;
  margin-left: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 1097px;
`;

const OverlapGroup2 = styled.div`
  width: 501px;
  height: 346px;
  position: relative;
`;

const Title = styled.h1`
  ${PoppinsBoldWhite64px}
  position: absolute;
  width: 501px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 80px;
`;

const ASmarterWayForDueDiligence = styled.div`
  ${PoppinsBoldPacificBlue20px}
  position: absolute;
  top: 222px;
  left: 0;
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 373px;
  height: 130px;
  top: 270px;
  left: 0;
`;

const UnsplashDesign = styled.img`
  width: 511px;
  height: 341px;
  margin-left: 85px;
  margin-top: 1px;
  object-fit: cover;
`;

const OverlapGroup3 = styled.div`
  width: 1440px;
  height: 391px;
  position: relative;
  margin-top: 100px;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 1440px;
  height: 390px;
  top: 1px;
  left: 0;
  background-color: var(--white);
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 720px;
  height: 390px;
  top: 1px;
  left: 720px;
  background-color: var(--primary);
`;

const CubeDesign = styled.div`
  position: absolute;
  width: 360px;
  height: 391px;
  top: 0;
  left: 539px;
  display: flex;
  flex-direction: column;
  padding: 90.5px 11.7px;
  align-items: flex-start;
  background-image: url("https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/6297bef0cb2f020cb95ef378/img/vector@2x.png");
  background-size: 100% 100%;
`;

const Founders = styled.div`
  min-height: 80px;
  align-self: center;
  margin-top: 11px;
  min-width: 166px;
  font-family: var(--font-family-poppins);
  font-weight: 500;
  color: var(--primary-font);
  font-size: var(--font-size-xl2);
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
`;

const FrameContainer = styled.div`
  height: 90px;
  position: relative;
  margin-top: 25px;
  display: flex;
  align-items: center;
  min-width: 336px;
`;

const LoremIpsumDolorSi = styled.div`
  position: absolute;
  width: 387px;
  top: 83px;
  left: 951px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--primary-font);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
`;

const LoremIpsumDolorSi1 = styled.div`
  ${PoppinsBoldPacificBlue24px}
  position: absolute;
  width: 387px;
  top: 87px;
  left: 97px;
  font-size: var(--font-size-l2);
  letter-spacing: 0;
`;

function Frame6(props) {
  const { name1, name2, name3, className } = props;

  return (
    <Frame61 className={`frame-6 ${className || ""}`}>
      <Ellipse1 className="ellipse-1" src="https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/6297bef0cb2f020cb95ef378/img/ellipse-1-1@2x.svg" />
      <OverlapGroup className="overlap-group">
        <Name className="name">
          {name1}
          {name2}
          {name3}
        </Name>
        <UCLA className="ucla">
          UCLA
        </UCLA>
      </OverlapGroup>
    </Frame61>
  );
}

const Frame61 = styled.div`
  width: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 93px;
  background-color: var(--primary-font);
  border-radius: 25px;
  transform: rotate(-0.02deg);
  box-shadow: 1px 1px 2px #000000;

  &.frame-6.frame-7 {
    margin-left: 26px;
    margin-top: 0;
  }
`;

const Ellipse1 = styled.img`
  width: 44px;
  height: 44px;
  margin-top: -14px;
  margin-right: 1px;
`;

const OverlapGroup = styled.div`
  width: 200px;
  height: 51px;
  align-items: center;
  position: relative;
  margin-top: 2px;
`;

const Name = styled.div`
  ${PoppinsBoldPacificBlue20px}
  position: absolute;
  width: 200px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const UCLA = styled.div`
  ${PoppinsNormalPaleSky16px}
  position: absolute;
  width: 200px;
  top: 24px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

class About extends React.Component {
  render() {
    return(
    <div className="container-center-horizontal">
      <div className="about1">
        <FlexRow1>
          <OverlapGroup2>
            <Title>We make traveling easier</Title>
            <ASmarterWayForDueDiligence>A SMARTER WAY FOR TRIP PLANNING</ASmarterWayForDueDiligence>
            <Vector1 src={carOutline} />
          </OverlapGroup2>
          <UnsplashDesign src={carImg}/>
        </FlexRow1>
        <OverlapGroup3>
          <Rectangle1></Rectangle1>
          <Rectangle3></Rectangle3>
          <CubeDesign>
            <Founders>FOUNDERS</Founders>
            <div className="member-box">
              <p className="members">Drake Cote</p>
              <p className="members">Sai</p>
              <p className="members">Tay</p>
              <p className="members">Jonah</p>
              <p className="members">Brian</p>
              <p className="members">Ben</p> 
            </div>
          </CubeDesign>
          <LoremIpsumDolorSi>
             We are a group of engineers who did this project for our CS 130 class at UCLA, but it is also a good venture idea. Many businesses like Airbnb, Uber, and Lyft started on a very similar personalized booking application.
          </LoremIpsumDolorSi>
          <LoremIpsumDolorSi1>
            The goal of our organization is to provide a viable way for people to list and book parking spaces for both commercial or personal use. 
          </LoremIpsumDolorSi1>
        </OverlapGroup3>
      </div>
    </div>
    );
  }
}

export default About;