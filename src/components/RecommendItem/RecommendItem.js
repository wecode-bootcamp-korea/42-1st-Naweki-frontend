import React, { useEffect, useState } from 'react';
import './RecommendItem.scss';

function RecommendItem() {
  const [recommendItem, setRecommendItem] = useState([]);

  const [showStartIdx, setShowStartIdx] = useState(0);

  const numOfShownCard = 3;
  const checkLeftBtnActive = () => showStartIdx > 0;
  const checkRightBtnActive = () =>
    showStartIdx < recommendItem.length - numOfShownCard;

  const onClickLeftBtn = () => {
    if (checkLeftBtnActive()) {
      setShowStartIdx(showStartIdx - 1);
    }
  };

  const onClickRightBtn = () => {
    if (checkRightBtnActive()) {
      setShowStartIdx(showStartIdx + 1);
    }
  };

  useEffect(() => {
    fetch('/data/shoesData.json')
      .then(res => res.json())
      .then(data => setRecommendItem(data));
  }, []);

  return (
    <div className="container">
      <div className="title-wrapper">
        <div className="title">You Might Also Like</div>
        <div className="button-wrapper">
          <button onClick={onClickLeftBtn} disabled={!checkLeftBtnActive()}>
            {'<'}
          </button>
          <button onClick={onClickRightBtn} disabled={!checkRightBtnActive()}>
            {'>'}
          </button>
        </div>
      </div>
      <div className="image-wrapper">
        <div
          className="image-mover"
          style={{ transform: `translateX(-${showStartIdx * (100 / 9)}%)` }}
        >
          {/* {recommendItem.map(imgUrl => (
            <div key={imgUrl.id} className="image">
              <img src={imgUrl.shoesImg} alt="추천 상품" />
            </div>
          ))} */}

          {recommendItem.map(imgUrl => {
            return (
              <div key={imgUrl.id} className="image">
                <img
                  className="shoesImg"
                  src={imgUrl.shoesImg}
                  alt="{imgUrl.shoesName}"
                />
                <div className="shoesInfo">
                  <div className="shoesName">{imgUrl.shoesName}</div>
                  <div className="price">{imgUrl.price} 원</div>
                </div>
                <div className="category">{imgUrl.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecommendItem;
// const [recommendItem, setRecommendItem] = useState([]);

// const [showStartIdx, setShowStartIdx] = useState(0);

// const numOfShownCard = 3;
// const checkLeftBtnActive = () => showStartIdx > 0;
// const checkRightBtnActive = () =>
//   showStartIdx < recommendItem.length - numOfShownCard;

// const onClickLeftBtn = () => {
//   if (checkLeftBtnActive()) {
//     setShowStartIdx(showStartIdx - 1);
//   }
// };

// const onClickRightBtn = () => {
//   if (checkRightBtnActive()) {
//     setShowStartIdx(showStartIdx + 1);
//   }
// };

// const showImgs = recommendItem.slice(
//   showStartIdx,
//   showStartIdx + numOfShownCard
// );

// useEffect(() => {
//   fetch('/data/shoesData.json')
//     .then(res => res.json())
//     .then(data => setRecommendItem(data));
// }, []);

// return (
//   <div className="container">
//     <div className="titleWrapper">
//       <div className="title">You Might Also Like</div>
//       <div className="buttonWrapper">
//         <button onClick={onClickLeftBtn} disabled={!checkLeftBtnActive()}>
//           {'<'}
//         </button>
//         <button onClick={onClickRightBtn} disabled={!checkRightBtnActive()}>
//           {'>'}
//         </button>
//       </div>
//     </div>
//     <div className="image-wrapper">
//       {showImgs.map(img => (
//         <div className="image">
//           <img src={img} />
//         </div>
//       ))}
//     </div>
//   </div>
// <div>
// {recommendItem.map(shoes => {
//   return (
//     <div key={shoes.id} className="itemBox">
//       <img
//         className="shoesImg"
//         src={shoes.shoesImg}
//         alt="{shoes.shoesName}"
//       />
//       <div className="shoesInfo">
//         <div className="shoesName">{shoes.shoesName}</div>
//         <div className="price">{shoes.price} 원</div>
//       </div>
//       <div className="category">{shoes.category}</div>
//     </div>
//   );
// })}
// </div>
//   );
// }

// export default RecommendItem;
