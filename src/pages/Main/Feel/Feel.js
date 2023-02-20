import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Feel.scss';

function Feel() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };

  return (
    <div className="feel">
      <video
        className="topVideo"
        autoPlay="autoplay"
        muted="muted"
        loop
        onClick={onClickBtn}
      >
        <source src="images/downnike.mp4" type="video/mp4" />
      </video>
      <div className="topText" onClick={onClickBtn}>
        A FEEL FOR EVERY YOU
      </div>
      <div className="topTextDetailFirst" onClick={onClickBtn}>
        몸과 마음이 몸과 마음이 좋아하는 나만의 다양한 움직임을 시작해보세요.
      </div>
      <div className="topTextDetailSecond" onClick={onClickBtn}>
        머리부터 발끝까지 모든 감각들을 깨워, 기분 좋은 하루를 보낼 수 있는
        에너지를 만들 수 있어요.
      </div>
      <div className="topTextDetailThird" onClick={onClickBtn}>
        지금 나를 위한 모든 가능성을 느껴보세요.
      </div>
      <div className="topBtnContainer">
        <button className="topDetailBtn" type="button" onClick={onClickBtn}>
          자세히 보기
        </button>
        <button className="topBuyBtn" type="submit" onClick={onClickBtn}>
          구매하기
        </button>
      </div>
    </div>
  );
}

export default Feel;
