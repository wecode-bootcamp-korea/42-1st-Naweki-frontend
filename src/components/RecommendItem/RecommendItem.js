import React from 'react';
import './RecommendItem.scss';

function RecommendItem({ shoesImg, shoesName, category, price }) {
  return (
    <div className="recommendItem">
      <img className="shoesImg" src={shoesImg} alt="{shoesName}" />
      <div className="shoesInfo">
        <div className="shoesName">{shoesName}</div>
        <div className="price">{price} 원</div>
      </div>

      <div className="category">{category}</div>
    </div>
  );
}

export default RecommendItem;
