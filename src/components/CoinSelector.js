import React from 'react';
import CoinButton from './CoinButton';
import { coins } from '../assets/coins';
import styled from 'styled-components';

const CoinSelectorBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85vw;
  max-width: 800px;
  margin: 1em auto;
`;


export default function CoinSelector({handleInsertCoin}) {
  return (
    <CoinSelectorBox>
      {coins.map(coin => ( 
        <CoinButton key={coin.id} coinValue={coin.coinValue} coinImg={coin.coinImg} coinSize={coin.coinSize} handleInsertCoin={handleInsertCoin}/>
      ))}
    </CoinSelectorBox>
  )
}
