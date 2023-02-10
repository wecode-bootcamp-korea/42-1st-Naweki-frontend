import React from 'react';
import './ProductDetail.scss';

function ProductDetail() {
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
        <div className="infoTopContainer">
          <div className="productInfo">
            <div className="productName">나위키 에얼 포스 1 '03</div>
            <div className="productCategory">여성 신발</div>
            <div className="productPrice">125,100 원</div>
            <div className="OriginalPrice">139,000 원</div>
          </div>
          <div className="OtherColorContainer">
            <img
              className="OtherColorBlack"
              src="/images/에얼포스블랙.jpg"
              alt="나위키 에얼 포스 1 '03 블랙"
            />
            <img
              className="OtherColorPink"
              src="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="나위키 에얼 포스 1 '03 핑크"
            />
            <img
              className="OtherColorBlue"
              src="https://cdn.pixabay.com/photo/2020/07/15/18/32/sneakers-5408674_1280.png"
              alt="나위키 에얼 포스 1 '03 블루"
            />
          </div>
          <div className="sizeHeader">사이즈 선택</div>
          <div className="sizeGuide">사이즈 가이드</div>
          <div className="sizeContainer">
            <div className="size">220</div>
            <div className="size">230</div>
            <div className="size">240</div>
            <div className="size">250</div>
            <div className="size">260</div>
          </div>
          <button className="cartBtn">장바구니</button>
          <button className="wishListBtn">위시리스트</button>
        </div>
        <div className="infoBottomContainer">
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
          <span className="detailDescription">상품 상세 정보 보기</span>
          <h3 className="freeDelivery">무료 배송 및 반품</h3>
          <h3 className="review">리뷰 (3712) </h3>
          <h3 className="moreInfo">추가 정보</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
