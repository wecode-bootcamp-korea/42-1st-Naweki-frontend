import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Leggings.scss';

function Leggings() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };
  return (
    <div className="leggings">
      <img
        className="leggingsImg"
        src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0cmV0Y2hpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        onClick={onClickBtn}
      />
      <div className="leggingsText" onClick={onClickBtn}>
        나위키 컴피 레깅스
      </div>
      <div className="leggingsTextDetail" onClick={onClickBtn}>
        다리를 숨쉬게 하는 편안함을 만나보세요.
      </div>
      <button className="leggingsBuyBtn" type="button" onClick={onClickBtn}>
        구매하기
      </button>
    </div>
  );
}

export default Leggings;
