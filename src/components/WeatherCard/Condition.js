import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: black;
  `;
  const State = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.2rem;
    color: black;
  `;

  return (
    <>
      <Temp>70 °C</Temp>
      <State className="condition">Clouds</State>
    </>
  );
};

export default Condition;
