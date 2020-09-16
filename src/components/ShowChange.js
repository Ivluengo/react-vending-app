import React from 'react';

import styled from 'styled-components';


export default function ShowChange( { change } ) {
  const coinMessageValues = ["2€", "1€", "0.5€", "0.2€", "0.1€"];

  return (
    <ChangeMessage change={change}>
      <h2>{change.amount ? `Your change is: ${change.amount}€` : ''}</h2>
      <h3>{change.amount ? "Coins  returned:"  : ""}</h3>
      <ul>
        { change.amount ?
          change.coins.map((coin, index) => {
            if(coin[1] !== 0) {
              return <li key={coinMessageValues[index]}>{`${coinMessageValues[index]} --> ${coin[1]}`}</li>;
            }else {
              return "";
            }
          })
        : ""}
      </ul>
    </ChangeMessage>
  );
}

const ChangeMessage = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center; 
  border: ${props => props.change.amount && "2px solid #e96969;"}     
  
  & ul {
    list-style: none;
    padding: 0;
    & li {
      font-size: 1.2em;
      font-weight: 300;
    }    
  }
`;
