import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite16px, PoppinsBoldBlack16px } from "./styledMixins";


function DayOpen(props) {
  const { spanText1, spanText2, price, className } = props;

  return (
    <DayOpen1 className={`day-open ${className || ""}`}>
      <Surname className="surname">
        <span className="span0 poppins-bold-black-16px">{spanText1}</span>
        <span className="span1 poppins-normal-black-16px">{spanText2}</span>
      </Surname>
      <Price className="price">{price}</Price>
    </DayOpen1>
  );
}

const DayOpen1 = styled.div`
  position: absolute;
  height: 22px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 8px;
  align-items: flex-start;
  min-width: 146px;

  &.day-open.day-close {
    top: 19px;
  }

  &.day-open.day-high {
    top: 37px;
  }

  &.day-open.day-low {
    top: 56px;
  }

  &.day-open.day-close-1 {
    top: 19px;
  }

  &.day-open.day-high-1 {
    top: 37px;
  }

  &.day-open.day-low-1 {
    top: 56px;
  }

  &.day-open.day-close-2 {
    top: 19px;
  }

  &.day-open.day-high-2 {
    top: 37px;
  }

  &.day-open.day-low-2 {
    top: 56px;
  }
`;

const Surname = styled.div`
  ${PoppinsBoldBlack16px}
  min-height: 20px;
  min-width: 85px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Price = styled.div`
  ${PoppinsNormalWhite16px}
  min-height: 20px;
  margin-left: 9px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Surname1 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-close  & {
    min-width: 87px;
  }
`;

const Price1 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-close  & {
    margin-left: 7px;
  }
`;

const Surname2 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-high  & {
    min-width: 79px;
  }
`;

const Price2 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-high  & {
    margin-left: 15px;
  }
`;

const Surname3 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-low  & {
    min-width: 73px;
  }
`;

const Price3 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-low  & {
    margin-left: 21px;
  }
`;

const Surname4 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-close-1  & {
    min-width: 87px;
  }
`;

const Price4 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-close-1  & {
    margin-left: 7px;
  }
`;

const Surname5 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-high-1  & {
    min-width: 79px;
  }
`;

const Price5 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-high-1  & {
    margin-left: 15px;
  }
`;

const Surname6 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-low-1  & {
    min-width: 73px;
  }
`;

const Price6 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-low-1  & {
    margin-left: 21px;
  }
`;

const Surname7 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-close-2  & {
    min-width: 87px;
  }
`;

const Price7 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-close-2  & {
    margin-left: 7px;
  }
`;

const Surname8 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-high-2  & {
    min-width: 79px;
  }
`;

const Price8 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-high-2  & {
    margin-left: 15px;
  }
`;

const Surname9 = styled.div`
  ${PoppinsBoldBlack16px}

  .day-open.day-low-2  & {
    min-width: 73px;
  }
`;

const Price9 = styled.div`
  ${PoppinsNormalWhite16px}

  .day-open.day-low-2  & {
    margin-left: 21px;
  }
`;

export default DayOpen;
