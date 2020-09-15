import React, { useState } from 'react';
import Header from './components/Header';
import CoinSelector from './components/CoinSelector';


function VendingApp() {

  const [amount, setAmount] = useState({totalAmount: 0});

  function handleInsertCoin(increment) {
    let newAmount = Number((amount.totalAmount + increment).toFixed(2));

    setAmount({totalAmount: newAmount})
  }
  
  return (
    <>
      <Header />
      <CoinSelector handleInsertCoin={handleInsertCoin} />
      <div>{amount.totalAmount}</div>
    </>
  );
}

export default VendingApp;
