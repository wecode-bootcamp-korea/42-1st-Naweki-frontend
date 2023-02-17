import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Infinite.scss';

function Infinite() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };

  return (
    <div className="infinite">
      <video
        className="infiniteVideo"
        autoPlay="autoplay"
        muted="muted"
        loop
        onClick={onClickBtn}
      >
        <source src="images/downnike4.mp4" type="video/mp4" />
      </video>
      <div className="experiment" onClick={onClickBtn}>
        끝없는 실험
      </div>
      <div className="infiniteText" onClick={onClickBtn}>
        나위키 인피니트 런
      </div>
      <div className="infiniteTextDetailFirst" onClick={onClickBtn}>
        믿을 수 없을 만큼 놀라운 쿠셔닝과 부드러운 착화감을 하나의 신발에 결합한
        인피니티 런 7.
      </div>
      <div className="infiniteTextDetailSecond" onClick={onClickBtn}>
        매 순간 최상의 러닝을 경험해보세요.
      </div>
      <button className="infiniteBuyBtn" type="submit" onClick={onClickBtn}>
        구매하기
      </button>
    </div>
  );
}
export default Infinite;
