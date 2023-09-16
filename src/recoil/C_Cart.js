import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartState, cartItemCountSelector } from './C_CartStore'; 

function Cart() {
  const cart = useRecoilValue(cartState);
  const itemCount = useRecoilValue(cartItemCountSelector);

  return (
    <div>
      <h1>장바구니 (상품 수: {itemCount})</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

// useRecoilValue는 Recoil 라이브러리에서 제공하는 또 다른 React hook입니다. 이 훅은 Recoil 상태 (atom 또는 selector)를 읽는데 사용됩니다. 그러나 useRecoilState와 달리, 이 훅은 상태를 변경하는 함수를 제공하지 않습니다, 오직 상태 값을 읽는데만 사용됩니다.