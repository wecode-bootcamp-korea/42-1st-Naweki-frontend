import React from 'react';
import './PaymentAside.scss';

const PaymentAside = () => {
  return (
    <aside className="paymentAside">
      <div className="cartWrapper">
        <p className="paymentTitle">장바구니</p>
        <p className="edit">편집</p>
      </div>
      <div>
        <div className="cartDescWrapper">
          <p>상품금액</p>
          <p>원</p>
        </div>
        <div className="cartDescWrapper">
          <p>배송비</p>
          <p>0 원</p>
        </div>
        <div className="cartDescWrapper">
          <p>총 결제 금액</p>
          <p>원</p>
        </div>
      </div>
      <p className="date">도착 예정일: 2월 28일(화)</p>
      <div className="productWrapper">
        <img className="productImg" alt="Product Img" src="images/logo.jpg" />
        <div className="productDescWrapper">
          <p>나이키 마이클 러닝화</p>
          <ul>
            <li>스타일번호 : </li>
            <li>사이즈 : </li>
            <li>컬러 : </li>
            <li>수량 : </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default PaymentAside;
