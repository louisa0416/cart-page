import { useEffect, useReducer, useState } from "react";
import axios from "axios";
////外部套件
// import logo from "./assets/logo.svg";
// import "./assets/App.css";
import "./assets/all.scss";
import Navbar from "./components/Navbar.js";
import Products from "./components/Products.js";
import Carts from "./components/Carts.js";

import { CartContext,cartReducer,cartInit } from "./store.js";

function App() {
  const reducer = useReducer(cartReducer,cartInit)

  return (
    <CartContext.Provider value={reducer}>
      <Navbar></Navbar>
      
      <div className="container mt-4">
        {/* 外層格線 */}
        <div className="row">
          <div className="col-md-7">
            <Products></Products>
          </div>
          <div className="col-md-5">
            <Carts></Carts>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}




export default App;