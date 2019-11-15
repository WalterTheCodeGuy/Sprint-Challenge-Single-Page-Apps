import React from "react";
import styled from "styled-components";

const Card = styled.div`
  font-size: 18px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  margin: 15px;
  color: mintcream;
  background: dimgray;
  padding: 2%;
  width: 40%;
  animation: 1s ease-out 0s 1 slideInFromLeft;
`;

const CardInfo = styled.div`
  font-size: 16px;
  border: 1px dashed black;
  margin: 0 auto;
  border-radius: 10px;
  padding: 5px;
  margin: 15px 0px;
  color: mintcream;
  background: grey;
  width: 40%;
  display: inline-block;
  
`;

export default function LocationCard({ name, type, dimension }) {
  return (
    <Card>
      <h2>{name}</h2>
      <CardInfo>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </CardInfo>
    </Card>
    );
}
