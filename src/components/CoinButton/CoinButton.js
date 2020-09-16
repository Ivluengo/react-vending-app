import React from 'react';
import { CoinBox, Coin, CoinStock } from './styledCoinButton';


export default function CoinButton( { coinValue, coinImg, coinName, coinSize, handleInsertCoin, internalAmount, handleAddCoins, isLogged } ) {

  let internalCoins = internalAmount.filter( coin => coin[0] === coinName);

  return (
    <CoinBox >
      <Coin 
        src={ coinImg } 
        onClick={ () => handleInsertCoin( coinValue, coinName ) }
        coinSize={ coinSize }
      />
      { isLogged && <CoinStock onClick={ () => handleAddCoins(coinName) }> { 
        `++: ${ internalCoins[0][1] }` 
      }
      </CoinStock> }
    </CoinBox>
   )
}