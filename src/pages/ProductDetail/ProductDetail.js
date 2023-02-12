import React, { useState } from 'react';
import EmptyHeartBtn from './EmptyHeartBtn/EmptyHeartBtn';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import FullHeartBtn from './FullHeartBtn/FullHeartBtn';
import './ProductDetail.scss';

function ProductDetail() {
  const [visible, setVisible] = useState(false);

  const [heart, setHeart] = useState(false);

  const onClickBtn = () => {
    setHeart(!heart);
  };

  return (
    <div className="productDetail">
      <div className="productDetailImges">
        <div className="detailImgVideo">
          <div className="detailImgsRow">
            <img
              className="productImgRowTop"
              src="https://cdn.pixabay.com/photo/2020/07/15/18/31/sneakers-5408669_1280.png"
              alt="제품 상세 이미지"
            />
            <img
              className="productImgRowBottom"
              src="/images/상세3.jpg"
              alt="제품 상세 이미지"
            />
          </div>

          <video
            className="productVideo"
            autoplay="autoplay"
            muted="muted"
            loop=""
          >
            <source src="images/downdetail.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="detailImgsColumn">
          <img
            className="detailImgColumnLeft"
            src="/images/상세1.jpg"
            alt="제품 상세 이미지"
          />
          <img
            className="detailImgColumnRight"
            src="/images/상세2.jpg"
            alt="제품 상세 이미지"
          />
        </div>
      </div>
      <div className="productInfoContainer">
        <div className="productInfoContainer">
          <div className="productInfo">
            <div className="productName">나위키 에얼 포스 1 '03</div>
            <div className="productCategory">여성 신발</div>
            <div className="priceContainer">
              <div className="productPrice">125,100 원</div>
              <div className="originalPrice">139,000 원</div>
            </div>
          </div>
          <div className="otherColorContainer">
            <img
              className="otherColorBlack"
              src="/images/에얼포스블랙.jpg"
              alt="나위키 에얼 포스 1 '03 블랙"
            />
            <img
              className="otherColorPink"
              src="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="나위키 에얼 포스 1 '03 핑크"
            />
            <img
              className="otherColorBlue"
              src="https://cdn.pixabay.com/photo/2020/07/15/18/32/sneakers-5408674_1280.png"
              alt="나위키 에얼 포스 1 '03 블루"
            />
          </div>
          <div className="sizeInfo">
            <div className="sizeHeader">
              <div className="sizeChoice">사이즈 선택</div>
              <div className="sizeGuide">사이즈 가이드</div>
            </div>

            <div className="sizeContainer">
              <div className="smallSize">
                <div className="size">220</div>
                <div className="size">225</div>
                <div className="size">230</div>
                <div className="size">235</div>
                <div className="size">240</div>
              </div>
              <div className="bigSize">
                <div className="size">245</div>
                <div className="size">250</div>
                <div className="size">255</div>
                <div className="size">260</div>
                <div className="size">265</div>
              </div>
            </div>
          </div>
          <div className="btnContainer" onClick={onClickBtn}>
            {heart ? <FullHeartBtn /> : <EmptyHeartBtn />}
          </div>

          {/* <div className="btnContainer">
          <button className="cartBtn">장바구니</button>
          <button className="wishListBtn" onClick={onClickBtn}>
            위시리스트{' '}
            <button className="emptyHeartBtn">
              <img
                className="emptyHeartImg"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                alt="빈 하트"
              />
            </button>
          </button>

          {heart ? 꽉찬하트 : 빈하트} */}
        </div>
        <div className="description">
          <span className="descriptionTop">
            빛이 그대로 살아 있는 나위키 에얼 포스 1 '03은 농구 아이콘의 익숙한
            디자인을 신선하게 재해석합니다. 산뜻한 가죽과 과감한 컬러, 딱 완벽할
            만큼의 화려함으로 빛나는 존재감을 발휘해 보세요.
          </span>
          <ul className="descriptionBottom">
            <li className="colorDescription">
              현재 컬러 : 화이트/화이트/화이트/화이트
            </li>
            <li className="styleDescription">스타일 : CC1928-100</li>
          </ul>
          <div className="detailDescription">상품 상세 정보 보기</div>
          <div className="detailService">
            <button
              className="freeDelivery"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {visible
                ? '무료 배송 및 반품 위쪽 화살표'
                : '무료 배송 및 반품 아래 화살표'}
              {visible && <FreeDelivery />}
            </button>
            <button className="review">리뷰 (3712) </button>
            <button className="moreInfo">추가 정보</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
