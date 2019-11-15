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
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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

export default function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <div className="img-container">
        <img src={props.image} alt='' />
      </div>
      <CardInfo>
        <p>Status: {props.status}</p>
        <p>Gender: {props.gender}</p>
        <p>Species: {props.species}</p>
      </CardInfo>
    </Card>
    );
}
