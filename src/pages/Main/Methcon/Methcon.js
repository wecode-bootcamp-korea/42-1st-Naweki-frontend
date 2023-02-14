import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Methcon.scss';

function Methcon() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };
  return (
    <div className="methcon" onClick={onClickBtn}>
      <div className="methconImg">
        <img
          className="methconImgLeft"
          src="https://images.unsplash.com/photo-1499083773823-5000fa2b23e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80"
          alt="나위키 하드 메스콘 3 보드"
        />
        <img
          className="methconImgRight"
          src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJUE0JTgwJUVCJUI5JTg0JTIwJUVDJTlBJUI0JUVCJThGJTk5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="나위키 하드 메스콘 3"
        />
      </div>
      <div className="methconText">나위키 하드 메스콘 3</div>
      <div className="methconTextDetailFirst">
        더 무거운 중량, 더 높은 점프, 더 빠른 방향 전환.
      </div>
      <div className="methconTextDetailSecond">
        유연하고 안정적인 트레이닝화로 매 순간 최고의 퍼포먼스를 발휘해 보세요.
      </div>
      <button className="methconBuyBtn" type="button">
        구매하기
      </button>
    </div>
  );
}

export default Methcon;
