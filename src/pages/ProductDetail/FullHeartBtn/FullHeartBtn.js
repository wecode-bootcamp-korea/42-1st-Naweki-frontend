import React from 'react';
import './FullHeartBtn.scss';

function FullHeartBtn() {
  return (
    <div className="fullHeartBtn">
      <button className="cartBtn">장바구니</button>
      <button className="wishListBtn">
        위시리스트
        <button className="fullHeartBtn">
          <img
            className="fullHeartImg"
            src="https://cdn-icons-png.flaticon.com/128/1077/1077086.png"
            alt="꽉 찬 하트"
          />
        </button>
      </button>
    </div>
  );
}

export default FullHeartBtn;
