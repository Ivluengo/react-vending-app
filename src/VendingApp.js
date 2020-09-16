import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import CoinManager from './components/CoinManager/CoinManager';
import ShowChange from './components/ShowChange/ShowChange';
import ProductSelector from './components/ProductSelector/ProductSelector';
import Footer from './components/Footer/Footer';


// Array thay will save the inserted coins for the refund process
let insertedCoins = [
  ['two', 0],
  ['one', 0],
  ['fifty', 0],
  ['twenty', 0],
  ['ten', 0],
];

//Array for reset
let zeroCoins = [
  ['two', 0],
  ['one', 0],
  ['fifty', 0],
  ['twenty', 0],
  ['ten', 0],
];   


function VendingApp() {
  
  // Initial amount of coins that are inside the vending machine
  const initialInternalAmount = [
    ['two', 2],
    ['one', 3],
    ['fifty', 4],
    ['twenty', 6],
    ['ten', 2],
  ];
  //If you want to try the internal amount of coins saved in localStorage change the initialInternalAmount to null
  //const initialInternalAmount = null;
  
  // Initial stock of products
  const initialStock = {
    cola: 3,
    lemon: 2,
    orange: 3,
    sprite: 0,
    energy: 4,
    water: 5
  }
  //If you want to try the stock saved in localStorage change the initialStock to null
  //const initialStock = null;

  //States of the Vending App
  const [insertedAmount, setInsertedAmount] = useState(0);
  const [internalAmount, setInternalAmount] = useState( initialInternalAmount || JSON.parse( localStorage.getItem( 'internalAmount' ) ));
  const [stock, setStock] = useState( initialStock ||  JSON.parse( localStorage.getItem('stock') ));
  const [change, setChange] = useState( { amount: 0, coins: zeroCoins } );
  const [isLogged, setIsLogged] = useState( false );


  //Side effect - every time that stock changes is saved to localStorage
  useEffect( () => {
    localStorage.setItem( "stock", JSON.stringify(stock) );  
  }, [stock] );

   //Side effect - every time that internalAmount changes is saved to localStorage
  useEffect( () => {
    localStorage.setItem( "internalAmount", JSON.stringify(internalAmount) );  
  }, [internalAmount] );

  //Handle Functions
  function handleInsertCoin( coinValue, coinName ) {

    //Reset change state if you insert a new coin    
    if ( change.amount !== 0 ) {
      insertedCoins = [
        ['two', 0],
        ['one', 0],
        ['fifty', 0],
        ['twenty', 0],
        ['ten', 0],
      ];
      setChange( { amount : 0, coins: insertedCoins } );
    }
    
    
    
    //Save the coin value into the array    
    insertedCoins.forEach( coin => coin[0] === coinName && ( coin[1] += 1 ) );
    
    let newInternalAmount = [...internalAmount];
    newInternalAmount.forEach( internalCoin => internalCoin[0] === coinName && ( internalCoin[1] += 1 ) );
    //Add the coins inside the state of the machine 
    setInternalAmount(newInternalAmount);
    
    //Total amount
    const newAmount = Number( ( insertedAmount + coinValue ).toFixed(2) );
    setInsertedAmount( newAmount );
  }

  function handleProductClick( enabled, productStock, productValue, productName ) {

    let anyError = {
      error: false,
      errType: "",
      errMessage: ""
    };
    
    //Checking if the product is available and buyable
    if ( enabled && productStock && productValue <= insertedAmount ) {
      
      //Managing the change
      anyError = giveChange( productValue, anyError );
      
      //Changing the stock of the product and reseting the amount to 0  if there is no change error
      if( !anyError.error && anyError.errType !== "noChange" ) {
        setStock( { ...stock, [productName] : stock[productName] - 1 } );
        setInsertedAmount(0);
        insertedCoins = [...zeroCoins];
      } 

    //If there is not stock and the user still clicks it promps an error
    } else if ( productValue <= insertedAmount && !productStock ) {
      alert( `There is no stock of ${productName} ` );
    }
  }

/*****************************************************/
  function giveChange( productValue, anyError ) {

    //Calculating the change amount and change it to cents
    let changeInCents = Math.ceil(( insertedAmount - productValue ) * 100);

    const coinsInCents = [200, 100, 50, 20, 10];
    
    //Will keep the new state of the internal amount
    let newInternalAmount = [...internalAmount];

    //Calculating the coins of each type and returning an array with the coins we will return
    let changingCoinsArray = coinsInCents.map(( coin, index ) => {
      
      let amountOfCoins = Math.floor( changeInCents / coin );

      //Asking if we have enough coins of that type
      if( newInternalAmount[index][1] === 0 ) {
        return 0;

      } else if( newInternalAmount[index][1] >= amountOfCoins ) {
        newInternalAmount[index][1] -= amountOfCoins;
        changeInCents -= amountOfCoins * coin;
        return amountOfCoins;

      } else {
        const restOfCoins = newInternalAmount[index][1];
        changeInCents -= restOfCoins * coin;
        newInternalAmount[index][1] = 0;
        return restOfCoins;
      }
    });

    
    //If there is still change to give, it means there wasn't enough coins to give change
    if( changeInCents !== 0 ) {
      anyError = {
        error: true,
        type: "noChange",
        errMessage: "We don't have enough coins to give you change",
      };
      alert( anyError.errMessage );
      return anyError;
    }

    //Update the new state of te internal amount
    setInternalAmount( newInternalAmount );

    //Creating an array with same properties as the internal amount array but with the coins that must be returned
    let newReturningAmount = [...zeroCoins];
    newReturningAmount.forEach(( value, index ) => {      
      if( changingCoinsArray[index] !== 0 ) {
        value[1] = changingCoinsArray[index] ; 

      }else {
        value[1] = 0;
      }
    });

    //Updating the change state
    setChange( { 
      amount: Math.ceil((insertedAmount - productValue) * 100) / 100,
      coins: newReturningAmount 
    });
    return anyError;
  }

/*****************************************************/
  function handleRefund() {
  
    //Substraction of the coins that have been inserted from the internal amount
    let newInternalAmount = [...internalAmount];    
    newInternalAmount.forEach(( internal, index ) => {
      internal[1] -= insertedCoins[index][1];
    });

    //Update the change state with the refund amount
    setChange( { amount: insertedAmount, coins: insertedCoins } );

    //Update the amount after the refund and reset the values
    setInternalAmount( newInternalAmount );
    setInsertedAmount(0);
  }

/*******************************************************/
  function handleLogin() {
    setIsLogged( !isLogged );
  }

/*******************************************************/
//Adds one selected product to the stock state
  function handleAddStock( productName ) {
    setStock( { ...stock, [productName] : stock[productName] + 1 } )
  }

/*******************************************************/
//Adds one selected coin to the internal amount state
  function handleAddCoins( coinName ) {
    let newInternalAmount = [...internalAmount];
    newInternalAmount.forEach((internalCoin) => internalCoin[0] === coinName && (internalCoin[1] += 1));

    setInternalAmount( newInternalAmount )
  }



  return (
    <>
      <Header handleLogin={ handleLogin } isLogged={ isLogged } />
      <CoinManager 
        handleInsertCoin={ handleInsertCoin } 
        insertedAmount={ insertedAmount }
        handleRefund={ handleRefund }
        internalAmount={ internalAmount }
        handleAddCoins={ handleAddCoins }
        isLogged={ isLogged }
      />
      <ShowChange change={ change } />
      <ProductSelector
        stock={ stock } 
        insertedAmount={ insertedAmount }
        handleProductClick={ handleProductClick }
        isLogged={ isLogged }
        handleAddStock={ handleAddStock }
      />
      <Footer />
    </>
  );
}

export default VendingApp;