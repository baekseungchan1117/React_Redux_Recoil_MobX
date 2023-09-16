import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';

import M_ProductPage from "./mobx/M_ProductPage";
import C_ProductPage from "./recoil/C_ProductPage";
import R_ProductPage from "./redux/R_ProductPage";
import Cart from "./recoil/C_Cart";

const LinkStyle = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  line-height: 200px;
  gap: 20px;
  text-decoration: none;
`;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LinkStyle>
          <Link to="/redux" style={{textDecoration: "none", color: "white"}}>Redux</Link>
          <Link to="/recoil" style={{textDecoration: "none", color: "white"}}>Recoil</Link>
          <Link to="/mobx" style={{textDecoration: "none", color: "white"}}>Mobx</Link>
        </LinkStyle>
      </header>
      <Routes>
        <Route path="/redux" element={<R_ProductPage />} />
        <Route path="/recoil" element={<C_ProductPage />} />
        <Route path="/mobx" element={<M_ProductPage />} />
        <Route path="/c.cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
