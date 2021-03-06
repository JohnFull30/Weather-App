import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.6rem;
    color: black;
  `;
  const Country = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
    color: black;
  `;

  return (
    <Container>
      <City>Raleigh</City>
      <Country>NC</Country>
    </Container>
  );
};
export default Location;
