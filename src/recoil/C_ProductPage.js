import React from 'react';
import { useRecoilState } from "recoil";
import { cartState } from "./C_CartStore";
import { Link } from "react-router-dom";


export default function C_ProductPage() {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('cartState', JSON.stringify(newCart));
  }

  return (
    <div>
      <h1>상품 페이지</h1>
      <button onClick={() => addToCart('상품 1')}>상품 1 담기</button>
      <button onClick={() => addToCart('상품 2')}>상품 2 담기</button>
      <Link to="/c.cart" style={{textDecoration: "none", color: "black", marginLeft:'10px'}}>공유 페이지 이동 Click</Link>
    </div>
  )
}


// useRecoilState는 Recoil 라이브러리에서 제공하는 React hook입니다. 이 훅은 Recoil 상태 (atom 또는 selector)에 대한 읽기 및 쓰기 액세스를 제공합니다. 주어진 atom의 현재 상태와 그 상태를 업데이트하는 함수를 반환합니다. 이는 React의 내장 useState 훅과 매우 유사한 API를 가지고 있습니다.