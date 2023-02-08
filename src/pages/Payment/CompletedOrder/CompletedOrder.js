import React from 'react';
import './CompletedOrder.scss';

const CompletedOrder = () => {
  return (
    <div className="completedOrder">
      <p className="paymentTitle">주문 완료</p>
      <form className="termsForm">
        <input className="termsInput" type="checkbox" />
        <label htmlFor="termsInput">
          <span className="terms">구매 약관</span>에 동의합니다
        </label>
      </form>
      <div className="orderBtnWrapper">
        <button className="orderBtn">주문하기</button>
      </div>
    </div>
  );
};

export default CompletedOrder;
