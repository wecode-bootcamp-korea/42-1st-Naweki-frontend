import React from 'react';
import GuestPayment from './GuestPayment/GuestPayment';
import MemberPayment from './MemberPayment/MemberPayment';

const Payment = () => {
  return (
    <div className="payment">
      {/* <GuestPayment /> */}
      <MemberPayment />
    </div>
  );
};

export default Payment;
