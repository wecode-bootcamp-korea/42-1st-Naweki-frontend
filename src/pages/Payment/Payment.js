import React from 'react';
import Guest from './Guest/Guest';
import PaymentOption from './PaymentOption/PaymentOption';
import PaymentOptionInput from './PaymentOptionInput/PaymentOptionInput';
import PaymentAside from './PaymentAside/PaymentAside';
import PaymentBox from './PaymentBox/PaymentBox';
import CompletedOrder from './CompletedOrder/CompletedOrder';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      {/* <Guest /> */}
      <p className="paymentParagraph">결제하기</p>
      <div className="contentWrapper">
        <div>
          <div className="titleWrapper">
            <p className="paymentTitle">배송 옵션</p>
            <p className="edit">편집</p>
          </div>
          <PaymentOptionInput />
          <PaymentOption />
          <hr />
          <PaymentBox />
          <hr />
          <CompletedOrder />
        </div>
        <PaymentAside />
      </div>
    </div>
  );
};

export default Payment;
