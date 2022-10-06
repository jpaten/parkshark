import './Home.css';
import DayOpen from "./DayOpen";
import BuyRange from "./BuyRange";
import Buttons from "./Buttons";
import React, { useState } from 'react';
import styled from "styled-components";
import graphPlaceholder from '../../images/graphPlaceholder.jpg';
import { PoppinsNormalBlack12px, PoppinsNormalWhite16px, PoppinsBoldWhite32px } from "./styledMixins";

function CompanyInfo(props) {
    return(
        <div className='CompanyInfo'>
            <div><h1>{props.name}</h1></div>
            <div><text>{props.symbol}</text></div>
            <div><h2>Day Open:</h2></div>
            <div><text>{props.dayOpen}</text></div>
            <div><h2>Day Close:</h2></div>
            <div><text>{props.dayClose}</text></div>
            <div><h2>Day High:</h2></div>
            <div><text>{props.dayHigh}</text></div>
            <div><h2>Day Low:</h2></div>
            <div><text>{props.dayLow}</text></div>
            <div>---------</div>
            <div><h2>Buy Range:</h2></div>
            <div><text>{props.buyRange}</text></div>
        </div>
    );
}

function CompanyPrediction(props) {
    const [companyInfo, setCompanyInfo] = useState(props);

    return(
        <div>
            <CompanyInfo
                name={companyInfo.name}
                symbol={companyInfo.symbol}
                dayOpen={companyInfo.dayOpen}
                dayClose={companyInfo.dayClose}
                dayHigh={companyInfo.dayHigh}
                dayLow={companyInfo.dayLow}
                buyRange={companyInfo.buyRange}
            />
            <img className='companyGraph'
                src={graphPlaceholder}
                alt="graph"
            />
        </div>
    );
}

function MainContent1() {
    // have an array holding user's company predictions
    const [companies, setCompanies] = useState([]);
    return(
        <div>
            <CompanyPrediction 
                name='TESLA'
                symbol='(TSLA)'
                dayOpen='$100'
                dayClose='$100'
                dayHigh='$100'
                dayLow='$100'
                buyRange='[40-100]'
            />
        </div>
    );
}

function MainContent2(){
  return (
    <MainPanel1>
      <OverlapGroup8>
        <Tesla>
          <OverlapGroup6>
            <Info>
              <CompanyName>
                <Title>Tesla</Title>
                <TSLA>(TSLA)</TSLA>
              </CompanyName>
              <DayContainer>
                <DayOpen spanText1="Day Open:" spanText2="" price="$100" />
                <DayOpen spanText1="Day Close:" spanText2="" price="$100" className="day-close" />
                <DayOpen spanText1="Day High:" spanText2="" price="$100" className="day-high" />
                <DayOpen spanText1="Day Low:" spanText2="" price="$100" className="day-low" />
              </DayContainer>
              <UpLine></UpLine>
              <BuyRange buyRange="Buy Range:" phone="[40 - 100]" />
              <Buttons xdelete="Delete" edit="Edit" />
            </Info>
            <LineChart>
              <OverlapGroup5>
                <OverlapGroupContainer>
                  <OverlapGroup1>
                    <XAxisGrid src="x-axis-grid.svg" />
                    <XAxisGrid1 src="x-axis-grid.svg" />
                    <XAxisGrid2 src="x-axis-grid-2.svg" />
                    <XAxisGrid3 src="x-axis-grid-2.svg" />
                    <XAxisGrid4 src="x-axis-grid.svg" />
                    <XAxisGrid5 src="x-axis-grid.svg" />
                    <XAxisGrid6 src="x-axis-grid-6.svg" />
                    <XAxisGrid7 src="x-axis-grid-7.svg" />
                    <XAxisGrid8 src="x-axis-grid-7.svg" />
                    <XAxisGrid9 src="x-axis-grid-7.svg" />
                    <XAxisGrid10 src="x-axis-grid-7.svg" />
                    <XAxisGrid11 src="x-axis-grid-7.svg" />
                    <YAxisGrid src="y-axis-grid.svg" />
                    <XAxisGrid src="x-axis-grid.svg" />
                    <Line src="line.svg" />
                    <Marker src="marker.svg" />
                    <Marker1 src="marker-1.svg" />
                    <Marker2 src="marker-2.svg" />
                    <Marker3 src="marker-3.svg" />
                    <Marker4 src="marker-4.svg" />
                    <Marker5 src="marker-5.svg" />
                    <Marker6 src="marker-6.svg" />
                    <Marker7 src="marker-7.svg" />
                    <Marker8 src="marker-8.svg" />
                    <Marker9 src="marker-9.svg" />
                    <Marker10 src="marker-10.svg" />
                    <Marker11 src="marker-11.svg" />
                    <Frame src="frame.svg" />
                  </OverlapGroup1>
                  <OverlapGroup3>
                    <XAxis src="y-axis-grid.svg" />
                  </OverlapGroup3>
                  <OverlapGroup2>
                    <Name>Jan</Name>
                    <Number>0</Number>
                  </OverlapGroup2>
                </OverlapGroupContainer>
                <FlexRow>
                  <Feb>Feb</Feb>
                  <Place>Mar</Place>
                  <Apr>Apr</Apr>
                  <Name1>May</Name1>
                  <Jun>Jun</Jun>
                  <Jul>Jul</Jul>
                  <Aug>Aug</Aug>
                  <Sep>Sep</Sep>
                  <Oct>Oct</Oct>
                  <Place>Nov</Place>
                  <Dec>Dec</Dec>
                </FlexRow>
                <NumberContainer>
                  <Number1>100</Number1>
                  <Number2>50</Number2>
                </NumberContainer>
              </OverlapGroup5>
              <YAxisGrid1 src="y-axis-grid-2.svg" />
            </LineChart>
          </OverlapGroup6>
        </Tesla>
        <Frame4>
          <Month>Month</Month>
          <IconDropdown src="icon-dropdown.svg" />
        </Frame4>
      </OverlapGroup8>
    </MainPanel1>
  )
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

const OverlapGroup8 = styled.div`
  width: 910px;
  height: 225px;
  position: relative;
  border-radius: 16px;
`;

const Tesla = styled.div`
  position: absolute;
  width: 910px;
  height: 225px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  background-color: var(--primary-font);
  border-radius: 16px;
  overflow: hidden;
`;

const OverlapGroup6 = styled.div`
  width: 927px;
  height: 254px;
  position: relative;
  margin-bottom: -29.33px;
`;

const Info = styled.div`
  position: absolute;
  width: 200px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 19px 0;
  align-items: center;
  min-height: 225px;
  background-color: var(--primary);
  border-radius: 16px 0px 0px 16px;
`;

const CompanyName = styled.div`
  height: 28px;
  display: flex;
  padding: 3px 10px;
  align-items: flex-start;
  min-width: 166px;
`;

const Title = styled.h1`
  ${PoppinsBoldWhite32px}
  min-height: 20px;
  min-width: 88px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const TSLA = styled.div`
  ${PoppinsNormalWhite16px}
  min-height: 20px;
  margin-left: 7px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const DayContainer = styled.div`
  width: 146px;
  height: 78px;
  position: relative;
  margin-top: 6px;
`;

const UpLine = styled.div`
  width: 162px;
  height: 1px;
  margin-top: 6px;
  background-color: var(--gallery);
`;

const LineChart = styled.div`
  position: absolute;
  width: 735px;
  height: 246px;
  top: 8px;
  left: 192px;
`;

const OverlapGroup5 = styled.div`
  ${PoppinsNormalBlack12px}
  position: absolute;
  width: 684px;
  height: 207px;
  top: 0;
  left: 21px;
`;

const OverlapGroupContainer = styled.div`
  position: absolute;
  width: 664px;
  height: 200px;
  top: 6px;
  left: 11px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 650px;
  height: 174px;
  top: 0;
  left: 14px;
`;

const XAxisGrid = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 3px;
`;

const XAxisGrid1 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 61px;
`;

const XAxisGrid2 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 120px;
`;

const XAxisGrid3 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 178px;
`;

const XAxisGrid4 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 236px;
`;

const XAxisGrid5 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 295px;
`;

const XAxisGrid6 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 353px;
`;

const XAxisGrid7 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 412px;
`;

const XAxisGrid8 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 470px;
`;

const XAxisGrid9 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 528px;
`;

const XAxisGrid10 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 587px;
`;

const XAxisGrid11 = styled.img`
  position: absolute;
  width: 1px;
  height: 174px;
  top: 0;
  left: 646px;
`;

const YAxisGrid = styled.img`
  position: absolute;
  width: 642px;
  height: 1px;
  top: 87px;
  left: 4px;
`;

const Line = styled.img`
  position: absolute;
  width: 235px;
  height: 114px;
  top: 47px;
  left: 3px;
`;

const Marker = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 156px;
  left: 0;
`;

const Marker1 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 78px;
  left: 58px;
`;

const Marker2 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 102px;
  left: 116px;
`;

const Marker3 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 86px;
  left: 175px;
`;

const Marker4 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 43px;
  left: 233px;
`;

const Marker5 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 6px;
  left: 291px;
`;

const Marker6 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 13px;
  left: 350px;
`;

const Marker7 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 142px;
  left: 408px;
`;

const Marker8 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 78px;
  left: 466px;
`;

const Marker9 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 57px;
  left: 525px;
`;

const Marker10 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 86px;
  left: 583px;
`;

const Marker11 = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 36px;
  left: 642px;
`;

const Frame = styled.img`
  position: absolute;
  width: 411px;
  height: 138px;
  top: 9px;
  left: 237px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  height: 1px;
  top: 174px;
  left: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 642px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/628530bfce435c86033077a0/releases/628d7f6249d27c90a53db577/img/y-axis-grid@1x.svg);
  background-size: 100% 100%;
`;

const XAxis = styled.img`
  width: 642px;
  height: 1px;
`;

const OverlapGroup2 = styled.div`
  ${PoppinsNormalBlack12px}
  position: absolute;
  width: 30px;
  height: 33px;
  top: 167px;
  left: 0;
`;

const Name = styled.div`
  position: absolute;
  top: 15px;
  left: 6px;
  text-align: center;
  letter-spacing: 0;
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: right;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  position: absolute;
  height: 18px;
  top: 189px;
  left: 76px;
  display: flex;
  align-items: flex-start;
  min-width: 608px;
`;

const Feb = styled.div`
  min-height: 18px;
  min-width: 22px;
  text-align: center;
  letter-spacing: 0;
`;

const Place = styled.div`
  min-height: 18px;
  margin-left: 36px;
  min-width: 23px;
  text-align: center;
  letter-spacing: 0;
`;

const Apr = styled.div`
  min-height: 18px;
  margin-left: 36px;
  min-width: 21px;
  text-align: center;
  letter-spacing: 0;
`;

const Name1 = styled.div`
  min-height: 18px;
  margin-left: 34px;
  min-width: 26px;
  text-align: center;
  letter-spacing: 0;
`;

const Jun = styled.div`
  min-height: 18px;
  margin-left: 34px;
  min-width: 22px;
  text-align: center;
  letter-spacing: 0;
`;

const Jul = styled.div`
  min-height: 18px;
  margin-left: 39px;
  min-width: 17px;
  text-align: center;
  letter-spacing: 0;
`;

const Aug = styled.div`
  min-height: 18px;
  margin-left: 37px;
  min-width: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const Sep = styled.div`
  min-height: 18px;
  margin-left: 35px;
  min-width: 23px;
  text-align: center;
  letter-spacing: 0;
`;

const Oct = styled.div`
  min-height: 18px;
  margin-left: 35px;
  min-width: 22px;
  text-align: center;
  letter-spacing: 0;
`;

const Dec = styled.div`
  min-height: 18px;
  align-self: flex-end;
  margin-left: 36px;
  min-width: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const NumberContainer = styled.div`
  position: absolute;
  width: 19px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 105px;
`;

const Number1 = styled.div`
  min-height: 18px;
  min-width: 19px;
  text-align: right;
  letter-spacing: 0;
`;

const Number2 = styled.div`
  min-height: 18px;
  margin-top: 69px;
  margin-left: 3px;
  min-width: 16px;
  text-align: right;
  letter-spacing: 0;
`;

const YAxisGrid1 = styled.img`
  position: absolute;
  width: 642px;
  height: 1px;
  top: 6px;
  left: 50px;
`;

const Frame4 = styled.div`
  position: absolute;
  height: 30px;
  top: 0;
  left: 29px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 852px;
`;

const Month = styled.div`
  min-height: 30px;
  margin-top: -1px;
  min-width: 64px;
  font-family: var(--font-family-poppins);
  font-weight: 500;
  color: var(--primary-font);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const IconDropdown = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 10px;
`;

export default MainContent2;