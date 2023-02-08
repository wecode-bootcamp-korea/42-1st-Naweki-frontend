import React from 'react';
import './FeaturedShoes.scss';

function FeaturedShoes({ shoesImg, shoesName, category, price }) {
  return (
    <div className="featuredShoesBox">
      <img className="featuredShoesImg" src={shoesImg} alt="{shoesName}" />
      <div>{shoesName}</div>
      <div>{category}</div>
      <div>{price}</div>
    </div>
  );
}

export default FeaturedShoes;
