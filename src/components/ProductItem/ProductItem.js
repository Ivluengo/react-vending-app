import React from 'react';
import { Product } from './styledProductItem';

export default function ProductItem({ productValue, productImg, productName, productDesc, productStock, enabled, handleProductClick }) {
  return (
    <Product className={enabled ? 'enabled' : 'disabled'} onClick={() => handleProductClick(enabled, productStock, productValue, productName)}>
      <img src={productImg} alt={productDesc} />
      <p className='productPrice'> {productValue}€</p>
      <p className='productStock'> {`Stock: ${productStock}`}</p>
    </Product>
  );
}