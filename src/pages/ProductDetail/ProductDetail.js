import React from 'react';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productDetailImges">
        <img
          className="productImgTopLeft"
          src="https://cdn.pixabay.com/photo/2020/07/15/18/31/sneakers-5408669_1280.png"
          alt="제품 상세 이미지"
        />
        <video className="productVideoTopRight" autoplay="autoplay" loop="">
          <source src="images/downdetail.mp4" type="video/mp4" />
        </video>
        <img
          className="productImgSecondLineLeft"
          src="/images/상세3.jpg"
          alt="제품 상세 이미지"
        />
        <img
          className="productImgSecondLineRight"
          src="/images/상세1.jpg"
          alt="제품 상세 이미지"
        />
        <img
          className="productImgThirdLineLeft"
          src="/images/상세2.jpg"
          alt="제품 상세 이미지"
        />
      </div>
      <div className="productName">나위키 벌룬 포스 1 '07</div>
      <div className="productCategory">여성 신발</div>
      <div className="productPrice">139,000 원</div>
      <img
        className="productOtherColorBlack"
        src="https://cdn.pixabay.com/photo/2020/07/15/18/31/sneakers-5408669_1280.png"
        alt="나위키 벌룬 포스 1 '07 블랙"
      />
    </div>
  );
}

export default ProductDetail;
