import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import PaymentContainer from './components/Container/PaymentContainer';
import Payment from './pages/Payment/Payment';
import Login from './pages/Login/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route element={<PaymentContainer />}>
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
