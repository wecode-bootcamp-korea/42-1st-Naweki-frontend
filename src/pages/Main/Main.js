import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecommendItem from '../../components/RecommendItem/RecommendItem';
import './Main.scss';

function Main() {
  const [featuredShoes, setFeaturedShoes] = useState([]);

  const productNavigate = useNavigate();

  const onClickBtn = () => {
    productNavigate('/productList');
  };

  useEffect(() => {
    fetch('/data/shoesData.json')
      .then(res => res.json())
      .then(data => setFeaturedShoes(data));
  }, []);

  return (
    <div className="main">
      <div className="topBar">상단바</div>
      <div className="navBar">카테고리</div>
      <video className="topVideo" autoplay="autoplay" muted="muted" loop>
        <source src="images/downnike.mp4" type="video/mp4" />
      </video>
      <div className="topText">A FEEL FOR EVERY YOU</div>
      <div className="topTextDetailFirst">
        몸과 마음이 몸과 마음이 좋아하는 나만의 다양한 움직임을 시작해보세요.
      </div>
      <div className="topTextDetailSecond">
        머리부터 발끝까지 모든 감각들을 깨워, 기분 좋은 하루를 보낼 수 있는
        에너지를 만들 수 있어요.
      </div>
      <div className="topTextDetailThird">
        지금 나를 위한 모든 가능성을 느껴보세요.
      </div>
      <div className="topBtnContainer">
        <button className="topDetailBtn" type="button">
          자세히 보기
        </button>
        <button className="topBuyBtn" type="submit" onClick={onClickBtn}>
          구매하기
        </button>
      </div>
      <img
        className="leggingsImg"
        src="https://images.unsplash.com/photo-1552196527-bffef41ef674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
        alt="나위키 컴피 레깅스"
      />
      <div className="leggingsText">나위키 컴피 레깅스</div>
      <div className="leggingsTextDetail">
        다리를 숨쉬게 하는 편안함을 만나보세요.
      </div>
      <button className="leggingsBuyBtn" type="button" onClick={onClickBtn}>
        구매하기
      </button>
      <video className="infiteVideo" autoplay="autoplay" muted="muted" loop>
        <source src="images/downnike4.mp4" type="video/mp4" />
      </video>
      <div className="experiment">끝없는 실험</div>
      <div className="infiniteText">나위키 인피니트 런</div>
      <div className="infiniteTextDetailFirst">
        믿을 수 없을 만큼 놀라운 쿠셔닝과 부드러운 착화감을 하나의 신발에 결합한
        인피니티 런 7.
      </div>
      <div className="infiniteTextDetailSecond">
        매 순간 최상의 러닝을 경험해보세요.
      </div>
      <button className="infiniteBuyBtn" type="submit" onClick={onClickBtn}>
        구매하기
      </button>
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
      <button className="methconBuyBtn" type="button" onClick={onClickBtn}>
        구매하기
      </button>
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
      <button className="danParisBuyBtn" type="button" onClick={onClickBtn}>
        구매하기
      </button>
      <div className="trendingContainer">
        <div className="trendingText">Trending Now</div>
        <div className="trendingImgContainer">
          <img
            className="trendingImgLeft"
            src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
            alt="트렌딩 스타일 이미지"
          />
          <div className="comfortTop">Comfort Top</div>
          <button
            className="trendingBuyBtnLeft"
            type="button"
            onClick={onClickBtn}
          >
            구매하기
          </button>
          <img
            className="trendingImgRight"
            src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            alt="트렌딩 신발 이미지"
          />
          <div className="blazer">Blazer</div>
          <button
            className="trendingBuyBtnRight"
            type="button"
            onClick={onClickBtn}
          >
            구매하기
          </button>
        </div>
      </div>
      <div className="recommendItemTitle">Recommend Items</div>
      {featuredShoes.map(shoes => {
        console.log(shoes);
        return <RecommendItem key={shoes.id} shoes={shoes} />;
      })}

      <div className="bottomCategory">
        <ul className="categoryNames">
          <li className="categoryName">Featured</li>
          <li className="categoryName">신발</li>
          <li className="categoryName">의류</li>
          <li className="categoryName">Kids</li>
        </ul>
      </div>

      {/* <RecommendItem
        shoesImg={shoesImg}
        shoesName={shoesName}
        category={category}
        price={price}
      /> */}
    </div>
  );
}

export default Main;
