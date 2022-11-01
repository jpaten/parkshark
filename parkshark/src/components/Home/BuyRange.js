import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite16px, PoppinsBoldBlack16px } from "./styledMixins";


function BuyRange(props) {
  const { buyRange, phone } = props;

  return (
    <BuyRange1>
      <BuyRange2>{buyRange}</BuyRange2>
      <Phone>{phone}</Phone>
    </BuyRange1>
  );
}

const BuyRange1 = styled.div`
  height: 28px;
  margin-top: 5px;
  display: flex;
  padding: 3px 5px;
  align-items: flex-start;
  min-width: 186px;
`;

const BuyRange2 = styled.div`
  ${PoppinsBoldBlack16px}
  min-height: 20px;
  min-width: 93px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Phone = styled.div`
  ${PoppinsNormalWhite16px}
  min-height: 20px;
  margin-left: 6px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

export default BuyRange;