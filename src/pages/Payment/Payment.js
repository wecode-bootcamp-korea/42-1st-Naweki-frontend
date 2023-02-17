import React from 'react';
import MemberPayment from './MemberPayment/MemberPayment';

const Payment = () => {
  const userToken = localStorage.getItem('userToken');

  return (
    <div className="payment">{userToken !== null && <MemberPayment />}</div>
  );
};

export default Payment;
