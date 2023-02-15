import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';

import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import RecommendItem from './components/RecommendItem/RecommendItem';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/recommend-item" element={<RecommendItem />} />
        {/* TODO: 추후에 추가예정; Nav 변경, Footer는 포함 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
