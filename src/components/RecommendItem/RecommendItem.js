import React, { useEffect, useState } from 'react';
import './RecommendItem.scss';

function RecommendItem({ shoesImg, shoesName, category, price }) {
  // const onClickBtn = () => {
  //   d;
  // };

  // useEffect(() => {
  //   fetch('/data/shoesData.json')
  //     .then(res => res.json())
  //     .then(data => setRecommendItem(data));
  // }, []);
  // const [itemBox, setItemBox] = useState([]);
  return (
    <div className="recommendItem">
      {/* <div className="arrowBtn">
        <img
          className="leftBtn"
          src="https://cdn-icons-png.flaticon.com/128/2722/2722991.png"
          alt="왼쪽 화살표"
        />
        <img
          className="rightBtn"
          src="https://cdn-icons-png.flaticon.com/128/2722/2722985.png"
          alt="오른쪽 화살표"
        />
      </div> */}
      <div className="itemBox">
        <img className="shoesImg" src={shoesImg} alt="{shoesName}" />
        <div className="shoesInfo">
          <div className="shoesName">{shoesName}</div>
          <div className="price">{price} 원</div>
        </div>
        <div className="category">{category}</div>
      </div>
      {/* {recommendItem.map(shoes => {
        return <RecommendItem key={shoes.id} {...shoes} />;
      })} */}
    </div>
  );
}

export default RecommendItem;
