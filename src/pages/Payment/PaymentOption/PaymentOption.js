import React from 'react';
import './PaymentOption.scss';

const PaymentOption = () => {
  return (
    <div className="paymentOption">
      <div className="nameWrapper">
        <p>성이름</p>
        <p className="edit">편집</p>
      </div>
      <p>서울특별시 강남구 신사동</p>
      <p>선릉로 161길 34</p>
      <p>06018</p>
      <p>example@gmail.com</p>
      <p>01000000000</p>
    </div>
  );
};

export default PaymentOption;
