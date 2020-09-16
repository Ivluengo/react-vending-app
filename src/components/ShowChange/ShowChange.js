import React from 'react';

import { ChangeMessage } from './styledShowChange';


export default function ShowChange( { change } ) {
  
  //Array for showing the values in the change box
  const coinMessageValues = ["2€", "1€", "0.5€", "0.2€", "0.1€"];

  return (
    <ChangeMessage change={ change }>
      <h2>{ change.amount ? `Your change is: ${ change.amount }€` : "" }</h2>
      <h3>{ change.amount ? "Coins  returned:"  : "" }</h3>
      <ul>
        { change.amount ?
          change.coins.map(( coin, index ) => {
            if( coin[1] !== 0 ) {
              return <li key={ coinMessageValues[index]} >{ `${ coinMessageValues[index] } --> ${ coin[1] }` }</li>;

            }else {
              return "";
            }
          })
        : "" }
      </ul>
    </ChangeMessage>
  );
}