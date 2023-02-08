import React from 'react';
import { paymentOptionsData } from './data/paymentOptionsData';
import './PaymentBox.scss';

const PaymentBox = () => {
  return (
    <div className="paymentBox">
      <p className="paymentTitle">결제</p>
      <form className="promotionForm">
        <input className="promotion" type="checkbox" />
        <label htmlFor="promotion">프로모션 코드가 있으신가요?</label>
      </form>
      <p className="paymentOptionTitle">결제 수단 선택</p>
      {paymentOptionsData.map(option => (
        <form key={option.id} className="paymentOptionForm">
          <input className="paymentOption" type="radio" />
          <label htmlFor="paymentOption">{option.name}</label>
        </form>
      ))}
      <div className="btnWrapper">
        <button className="orderBtn">결제하기</button>
        <p className="orderDesc">주문 검토 후 카드 세부 정보를 입력합니다</p>
      </div>
    </div>
  );
};

export default PaymentBox;
