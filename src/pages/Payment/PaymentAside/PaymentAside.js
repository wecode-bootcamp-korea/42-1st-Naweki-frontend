import React, { useState, useEffect } from 'react';
import CartProduct from './CartProduct/CartProduct';
import './PaymentAside.scss';

const PaymentAside = () => {
  const [tooltipClicked, setTooltipClicked] = useState(false);
  const [cartData, setCartData] = useState([]);

  const onClickTooltip = () => {
    setTooltipClicked(prev => !prev);
  };

  useEffect(() => {
    fetch('data/cartData.json')
      .then(res => res.json())
      .then(data => setCartData(data));
  }, []);

  return (
    <aside className="paymentAside">
      <div className="cartWrapper">
        <div className="paymentTitle">장바구니</div>
        <div className="edit">편집</div>
      </div>
      <div>
        <div className="cartDescWrapper">
          <div className="helpWrapper">
            <div>
              <span>상품금액</span>
              <img
                className="help"
                alt="Help Img"
                src="/images/payment/help.png"
                onClick={onClickTooltip}
              />
            </div>
            {tooltipClicked && (
              <div className="tooltip">
                상품 금액은 프로모션 코드 적용 전, 배송비를 제외한 총 주문
                금액입니다.
              </div>
            )}
          </div>
          <div>원</div>
        </div>
        <div className="cartDescWrapper">
          <div>배송비</div>
          <div>무료</div>
        </div>
        <div className="cartDescWrapper">
          <div>총 결제 금액</div>
          <div>원</div>
        </div>
      </div>
      <div className="date">도착 예정일: 2월 28일(화)</div>
      {cartData.map(cart => (
        <CartProduct cart={cart} key={cart.id} />
      ))}
    </aside>
  );
};

export default PaymentAside;
