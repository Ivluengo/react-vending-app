import React from 'react';
import { products } from '../../assets/products';
import ProductItem from '../ProductItem/ProductItem';
import { StepTitle, ProductSelectorBox } from './styledProductSelector';


export default function ProductSelector( { stock, insertedAmount, handleProductClick, isLogged, handleAddStock } ) {

   return (
      <>
         <StepTitle className='stepTwo'>{ products.some( (product) => product.productValue <= insertedAmount ) ? 'Step 2 - Select product' : '' }</StepTitle>
         <ProductSelectorBox>
            { 
               products.map(( { id, productValue, productImg, productName, productDesc } ) => (
                  <ProductItem
                     key={ id }
                     productValue={ productValue }
                     productImg={ productImg }
                     productName={ productName }
                     productDesc={ productDesc }
                     productStock={ stock[productName]}
                     enabled={ productValue  <= insertedAmount && stock[productName] > 0 ? true : false }
                     handleProductClick={ handleProductClick }
                     isLogged={ isLogged }
                     handleAddStock={ handleAddStock }
                  />
               ))
            }
         </ProductSelectorBox>
      </>
   );
}