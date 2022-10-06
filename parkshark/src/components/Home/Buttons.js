import React from "react";
import styled from "styled-components";
import { PoppinsMediumWhite13px } from "./styledMixins";


function Buttons(props) {
  const { xdelete, edit } = props;

  return (
    <Buttons1>
      <Delete>
        <Delete1>{xdelete}</Delete1>
      </Delete>
      <Edit>
        <Delete1>{edit}</Delete1>
      </Edit>
    </Buttons1>
  );
}

const Buttons1 = styled.div`
  height: 30px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  min-width: 162px;
`;

const Delete = styled.div`
  height: 25px;
  display: flex;
  padding: 1px 16px;
  align-items: flex-start;
  min-width: 75px;
  background-color: var(--black);
  border-radius: 10px;
`;

const Delete1 = styled.div`
  ${PoppinsMediumWhite13px}
  min-height: 20px;
  letter-spacing: 0;
`;

const Edit = styled.div`
  height: 25px;
  margin-left: 12px;
  display: flex;
  padding: 1px 25px;
  align-items: flex-start;
  min-width: 75px;
  background-color: var(--black);
  border-radius: 10px;
`;

export default Buttons;