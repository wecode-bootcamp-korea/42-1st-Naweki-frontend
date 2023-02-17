import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dan.scss';

function Dan() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };
  return (
    <div className="dan">
      <img
        className="danParis"
        src="../../../../images/dan.png"
        alt="댄 X 밀라노 생제르망"
        onClick={onClickBtn}
      />
      <div className="danText" onClick={onClickBtn}>
        댄 X 파리 생제르망
      </div>
      <div className="danTextDetail" onClick={onClickBtn}>
        세계 무대에서 빛나고 있는 파리를 조명한 새로운 댄 x 파리 생제르망
        컬렉션을 지금 만나보세요.
      </div>
      <button className="danParisBuyBtn" type="button" onClick={onClickBtn}>
        구매하기
      </button>
    </div>
  );
}

export default Dan;
