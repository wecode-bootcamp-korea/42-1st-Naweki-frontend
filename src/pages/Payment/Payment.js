import React from 'react';
import GuestPayment from './GuestPayment/GuestPayment';
import MemberPayment from './MemberPayment/MemberPayment';

const Payment = () => {
  return (
    <div className="payment">
      // TODO: 토큰 값 여부 확인 후 둘 중 하나를 보여줄 예정
      {/* <GuestPayment /> */}
      <MemberPayment />
    </div>
  );
};

export default Payment;
