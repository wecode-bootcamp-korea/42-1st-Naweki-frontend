import React, { useEffect, useState } from 'react';
import './RecommendItem.scss';

function RecommendItem() {
  const [recommendItem, setRecommendItem] = useState([]);

  const [count, setCount] = useState(0);

  const nextBtn = () => {
    setCount(count => (count < 8 ? count + 1 : (count = 0)));
  };

  const prevBtn = () => {
    setCount(count => (count > 0 ? count - 1 : null));
  };

  // useEffect(() => {
  //   const interval = setTimtout(() => {
  //     nextBtn();
  //   }, 3000);
  //   return () => clearTimeout(interval);
  // });

  useEffect(() => {
    fetch('/data/shoesData.json')
      .then(res => res.json())
      .then(data => setRecommendItem(data));
  }, []);

  return (
    <div>
      {recommendItem.map(shoes => {
        return (
          <div
            key={shoes.id}
            className="itemBox"
            style={{ transform: `translateX(${count * -1080}px)` }}
          >
            <button className="prev" onClick={prevBtn}>
              〈
            </button>
            <button className="next" onClick={nextBtn}>
              〉
            </button>
            <img
              className="shoesImg"
              src={shoes.shoesImg}
              alt="{shoes.shoesName}"
            />
            <div className="shoesInfo">
              <div className="shoesName">{shoes.shoesName}</div>
              <div className="price">{shoes.price} 원</div>
            </div>
            <div className="category">{shoes.category}</div>
          </div>
        );
      })}
    </div>
  );
}

/* <div className="arrowBtn">
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
      </div> */
export default RecommendItem;
