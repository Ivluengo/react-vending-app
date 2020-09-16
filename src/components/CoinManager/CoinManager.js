import React from 'react';
import CoinButton from '../CoinButton/CoinButton';
import { coins } from '../../assets/coins';
import { CoinManagerBox, RefundButton } from './styledCoinManager';

export default function CoinManager( { handleInsertCoin, insertedAmount, handleRefund, internalAmount, handleAddCoins, isLogged } ) {


  return (
    <CoinManagerBox>
      <h2 className='stepOne'>Step 1 - Insert Coin</h2>
      <div className="allCoinsBox">
        { coins.map(( { id, coinValue, coinImg, coinName, coinSize } ) => (
          <CoinButton
            key={ id }
            coinValue={ coinValue }
            coinImg={ coinImg }
            coinName={ coinName }
            coinSize={ coinSize }
            handleInsertCoin={ handleInsertCoin }
            internalAmount={ internalAmount }
            handleAddCoins={ handleAddCoins }
            isLogged={ isLogged }
          />
        ))}
      </div>
      <div className='amountBox'>
        <h2>Inserted Amount: { insertedAmount }€</h2>
        { insertedAmount !== 0 && <RefundButton onClick={ handleRefund }>Refund</RefundButton>}
      </div>
    </CoinManagerBox>
  );
}