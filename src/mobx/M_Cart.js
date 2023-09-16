// Cart.js (다른 페이지)
import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from './M_CartStore';

const Cart = observer(() => {
  return (
    <div>
      <h1>장바구니</h1>
      <ul>
        {cartStore.cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default Cart;
