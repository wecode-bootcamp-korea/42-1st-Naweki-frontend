import React from 'react';
import './PaymentOption.scss';

const PaymentOption = () => {
  return (
    <div className="paymentOption">
      <div className="shippingWrapper">
        <div className="nameWrapper">
          <p>성이름</p>
        </div>
        <p>서울특별시 강남구 신사동</p>
        <p>선릉로 161길 34</p>
        <p>06018</p>
        <p>example@gmail.com</p>
        <p>01000000000</p>
      </div>

      <div className="shippingWrapper">
        <p>배송 방법</p>
        <p>무료</p>
        <p>도착예정일: 2월 27일 (월) - 3월 3일 (금)</p>
      </div>
    </div>
  );
};

export default PaymentOption;
