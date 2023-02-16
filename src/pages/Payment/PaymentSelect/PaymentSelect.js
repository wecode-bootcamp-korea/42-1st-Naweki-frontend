import React from 'react';
import { PAYMENT_SELECT_DATA } from './data/paymentSelectData';
import './PaymentSelect.scss';

const PaymentSelect = ({
  onClickToComplete,
  selectedRadio,
  onChangeSelectedRadio,
}) => {
  return (
    <div className="paymentSelect">
      <div className="paymentTitle">결제</div>
      <form className="promotionForm">
        <input className="promotion" type="checkbox" />
        <label htmlFor="promotion">프로모션 코드가 있으신가요?</label>
      </form>
      <div className="paymentOptionTitle">결제 수단 선택</div>
      <form className="paymentOptionForm">
        {PAYMENT_SELECT_DATA.map(option => (
          <label key={option.id}>
            <input
              className="paymentOption"
              name="options"
              type="radio"
              value={option.name}
              onChange={onChangeSelectedRadio}
            />
            {option.name}
          </label>
        ))}
      </form>
      <div className="btnWrapper">
        <button className="orderBtn" onClick={onClickToComplete}>
          결제하기
        </button>
        <div className="orderDesc">
          주문 검토 후 카드 세부 정보를 입력합니다
        </div>
      </div>
    </div>
  );
};

export default PaymentSelect;
