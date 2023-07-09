import React, { useState } from "react";
import { styled } from "styled-components";

const DarkDiv = styled.div`
  margin: 20px;
  color: white;
  background-color: black;
`;

const LightDiv = styled.div`
  margin: 20px;
`;

const DarkBtn = styled.input`
  margin-left: 20px;
`;

function DarkMode() {
  const [isChecked, setIsChecked] = useState(false);

  const ChangeModeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isChecked ? <DarkDiv>DarkMode</DarkDiv> : <LightDiv>WhiteMode</LightDiv>}
      <DarkBtn type="checkbox" onClick={ChangeModeHandler} />
    </>
  );
}

export default DarkMode;
