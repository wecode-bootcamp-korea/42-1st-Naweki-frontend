import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PaymentNav from '../Nav/PaymentNav/PaymentNav';

const PaymentContainer = () => {
  return (
    <>
      <PaymentNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default PaymentContainer;
