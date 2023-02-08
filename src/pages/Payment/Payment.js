import React from 'react';
import Guest from './Guest/Guest';
import PaymentOption from './PaymentOption/PaymentOption';
import PaymentOptionInput from './PaymentOptionInput/PaymentOptionInput';
import PaymentAside from './PaymentAside/PaymentAside';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      {/* <Guest /> */}
      <p className="paymentParagraph">결제하기</p>
      <div className="contentWrapper">
        <div>
          <PaymentOptionInput />
          <PaymentOption />
          <hr />
        </div>
        <PaymentAside />
      </div>
    </div>
  );
};

export default Payment;
