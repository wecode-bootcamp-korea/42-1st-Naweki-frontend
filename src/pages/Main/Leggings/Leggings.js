import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Leggings.scss';

function Leggings() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };
  return (
    <div className="leggings" onClick={onClickBtn}>
      <img
        className="leggingsImg"
        src="https://images.unsplash.com/photo-1552196527-bffef41ef674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
        alt="나위키 컴피 레깅스"
      />
      <div className="leggingsText">나위키 컴피 레깅스</div>
      <div className="leggingsTextDetail">
        다리를 숨쉬게 하는 편안함을 만나보세요.
      </div>
      <button className="leggingsBuyBtn" type="button">
        구매하기
      </button>
    </div>
  );
}

export default Leggings;
