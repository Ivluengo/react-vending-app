import React from 'react';
import { Product, StockButton } from './styledProductItem';


export default function ProductItem( { productValue, productImg, productName, productDesc, productStock, enabled, handleProductClick, isLogged, handleAddStock } ) {
  return (
    <Product 
      className={ enabled ? 'enabled' : 'disabled' } 
      onClick={ () => handleProductClick( enabled, productStock, productValue, productName ) }
    >
      <img src={ productImg } alt={ productDesc } />
      <p className='productPrice'> { productValue }€</p>
      <p className='productStock'> { `Stock: ${ productStock }` }</p>
      { isLogged && <StockButton onClick={ () => handleAddStock(productName) } >Add Stock</StockButton> }
    </Product>
  );
}