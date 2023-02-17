import React from 'react';
// import './PaymentCompleted.scss';

const PaymentCompleted = ({ onClickPayment }) => {
  return (
    <div className="paymentCompleted">
      <div className="paymentTitle">주문 완료</div>
      <form className="termsForm">
        <input className="termsInput" type="checkbox" />
        <label htmlFor="termsInput">
          <span className="terms">구매 약관</span>에 동의합니다
        </label>
      </form>
      <div className="orderBtnWrapper">
        <button className="orderBtn" onClick={onClickPayment}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default PaymentCompleted;
