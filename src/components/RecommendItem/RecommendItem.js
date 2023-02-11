import React, { useEffect, useState } from 'react';
import './RecommendItem.scss';

function RecommendItem() {
  const [recommendItem, setRecommendItem] = useState([]);

  useEffect(() => {
    fetch('/data/shoesData.json')
      .then(res => res.json())
      .then(data => setRecommendItem(data));
  }, []);

  return (
    <div>
      {recommendItem.map(shoes => 
        {return key={shoes.id} 
        <div>
            <div className="itemBox">
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
      </div>}
    
        )}
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

//   {recommendItem.map({shoesImg, shoesName, category, price} => (
//     <div className="itemBox">
//     <img className="shoesImg" src={shoesImg} alt="{shoesName}" />
//     <div className="shoesInfo">
//       <div className="shoesName">{shoesName}</div>
//       <div className="price">{price} 원</div>
//     </div>
//     <div className="category">{category}</div>
//   </div>
// ))}

export default RecommendItem;



return (
  <div>
    {recommendItem.map(shoes => (
      key={shoes.id},
      <div className="itemBox">
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
    ))}
  </div>
);
}