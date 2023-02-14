import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dan.scss';

function Dan() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };
  return (
    <div className="dan" onClick={onClickBtn}>
      <img
        className="danParis"
        src="https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        alt="댄 X 밀라노 생제르망"
      />
      <div className="danText">댄 X 파리 생제르망</div>
      <div className="danTextDetail">
        세계 무대에서 빛나고 있는 파리를 조명한 새로운 댄 x 파리 생제르망
        컬렉션을 지금 만나보세요.
      </div>
      <button className="danParisBuyBtn" type="button">
        구매하기
      </button>
    </div>
  );
}

export default Dan;
