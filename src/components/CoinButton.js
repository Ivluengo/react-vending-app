import React from 'react';
import styled from 'styled-components';

const Coin = styled.img`
  width: ${props => props.coinSize}%;
  cursor: pointer;
`;

export default function CoinButton( {coinValue, coinImg, coinSize, handleInsertCoin} ) {
  return (
    <>
      <Coin src={coinImg} coinSize={coinSize} onClick={() => handleInsertCoin(coinValue)}/>
    </>  
      
  )
}
