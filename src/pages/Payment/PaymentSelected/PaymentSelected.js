import React from 'react';
import './PaymentSelected.scss';

const PaymentSelected = ({ selectedRadio }) => {
  return (
    <div className="paymentSelected">
      <div className="titleWrapper">
        <div className="paymentTitle">결제</div>
        <img
          className="checkImg"
          alt="Check Img"
          src="images/payment/check.png"
        />
      </div>

      <div className="paymentResult">
        <div>결제수단</div>
        <div className="result">{selectedRadio}</div>
      </div>
    </div>
  );
};

export default PaymentSelected;
