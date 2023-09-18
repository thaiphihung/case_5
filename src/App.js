import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login';
import Register from "./pages/Register";
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
function App(props) {
  return (
    <div>
      <BrowserRouter>
      <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
          </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
