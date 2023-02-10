import React from 'react';
import { PAYMENT_OPTION_DATA } from './data/paymentSelectData';
import './PaymentSelect.scss';

const PaymentSelect = ({ onClickToComplete }) => {
  return (
    <div className="paymentSelect">
      <p className="paymentTitle">결제</p>
      <form className="promotionForm">
        <input className="promotion" type="checkbox" />
        <label htmlFor="promotion">프로모션 코드가 있으신가요?</label>
      </form>
      <p className="paymentOptionTitle">결제 수단 선택</p>
      {PAYMENT_OPTION_DATA.map(option => (
        <form key={option.id} className="paymentOptionForm">
          <input className="paymentOption" type="radio" />
          <label htmlFor="paymentOption">{option.name}</label>
        </form>
      ))}
      <div className="btnWrapper">
        <button className="orderBtn" onClick={onClickToComplete}>
          결제하기
        </button>
        <p className="orderDesc">주문 검토 후 카드 세부 정보를 입력합니다</p>
      </div>
    </div>
  );
};

export default PaymentSelect;
