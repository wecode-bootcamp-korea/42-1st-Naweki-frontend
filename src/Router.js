import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import PaymentContainer from './components/Container/PaymentContainer';
import Payment from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<PaymentContainer />}>
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
