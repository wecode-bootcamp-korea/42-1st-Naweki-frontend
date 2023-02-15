import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Trending.scss';

function Trending() {
  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };

  return (
    <div className="trending" onClick={onClickBtn}>
      <div className="trendingText">Trending Now</div>
      <div className="trendingImgContainer">
        <img
          className="trendingImgLeft"
          src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
          alt="트렌딩 스타일 이미지"
        />
        <img
          className="trendingImgRight"
          src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt="트렌딩 신발 이미지"
        />
      </div>
      <div className="trendingInfo">
        <div className="comfortTopContainer">
          <div className="comfortTop">Comfort Top</div>
          <button className="comfortTopBuyBtn" type="button">
            구매하기
          </button>
        </div>
        <div className="blazerContainer">
          <div className="blazer">Blazer</div>
          <button className="blazerBuyBtn" type="button">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trending;
