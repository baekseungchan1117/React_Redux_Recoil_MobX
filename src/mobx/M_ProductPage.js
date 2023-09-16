// ProductPage.js
import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from './M_CartStore';

const ProductPage = observer(() => {
  const addToCart = (item) => {
    cartStore.addToCart(item);
  };

  return (
    <div>
      <h1>상품 페이지</h1>
      <button onClick={() => addToCart('상품 1')}>상품 1 담기</button>
      <button onClick={() => addToCart('상품 2')}>상품 2 담기</button>
    </div>
  );
});

export default ProductPage;
