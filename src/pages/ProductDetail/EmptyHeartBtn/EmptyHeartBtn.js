import React from 'react';
import './EmptyHeartBtn.scss';

function EmptyHeartBtn() {
  return (
    <div className="emptyHeartBtn">
      <button className="cartBtn">장바구니</button>
      <button className="wishListBtn">
        위시리스트
        <button className="emptyHeartBtn">
          <img
            className="emptyHeartImg"
            src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
            alt="빈 하트"
          />
        </button>
      </button>
    </div>
  );
}

export default EmptyHeartBtn;
