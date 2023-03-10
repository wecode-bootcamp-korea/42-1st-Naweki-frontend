import { useState } from 'react';
import './CartList.scss';

export const CartList = ({
  list,
  handleDelete,
  setSize,
  setHowMany,
  sendProductSize,
  sendProductStock,
}) => {
  const [heart, setHeart] = useState(true);
  const handleLike = e => {
    setHeart(previousImg => !previousImg);
  };

  const onSelectSize = e => {
    setSize(e.target.value);
  };

  const onSelectMany = e => {
    setHowMany(e.target.value);
  };

  return (
    <div className="cartList">
      <div className="productContainer">
        <div className="imgWrapper">
          <img
            src={list.thumbnailImage}
            alt="something"
            className="cartImage"
          />
        </div>
        <div className="productInfoWrapper">
          <div className="productName">{list.productName}</div>
          <div className="productCategory">{list.subName}</div>
          <div className="productDetail">{list.color}</div>
          <div className="selectorWrapper">
            <div className="size">사이즈</div>
            <select
              onChange={(onSelectSize, sendProductSize)}
              name="sizes"
              id="sizeSelect"
              className="productSize"
            >
              {SIZE_LIST.map(data => {
                return (
                  <option key={data.id} value={data.size}>
                    {data.size}
                  </option>
                );
              })}
            </select>
            <div className="number">수량</div>
            <select
              onChange={(onSelectMany, sendProductStock)}
              name="howMany"
              id="howMany"
              className="howManyProduct"
            >
              {HOW_MANY_LIST.map(data => {
                return (
                  <option key={data.id} value={data.many}>
                    {data.many}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="btnWrapper">
            <button className="heartBtn">
              {heart ? (
                <img
                  src="images/heart-regular.png"
                  alt="emptyHeart"
                  onClick={handleLike}
                />
              ) : (
                <img
                  src="images/heart-solid.png"
                  alt="fullHeart"
                  onClick={handleLike}
                />
              )}
            </button>
            <button
              onClick={() => handleDelete(list.cartItemId)}
              className="trashBtn"
            >
              <img src="images/trash-can-regular.png" alt="deleteBtn" />
            </button>
          </div>
        </div>
        <div className="priceWrapper">
          <div className="originPrice">
            {list.price}
            {/* {list.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
          </div>
          <div className="reducedPrice">
            {list.discountPrice}
            {/* {list.discountPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            원
          </div>
        </div>
      </div>
      <div className="shippingInfo">
        <div className="shipPrice">무료배송</div>
        <div className="arrivalBox">
          도착 예정일: <div className="date">{list.createdAt}</div>{' '}
          <button className="location">지역 수정</button>
        </div>
      </div>
    </div>
  );
};

const HOW_MANY_LIST = [
  { id: 1, many: '1' },
  { id: 2, many: '2' },
  { id: 3, many: '3' },
  { id: 4, many: '4' },
  { id: 5, many: '5' },
  { id: 6, many: '6' },
  { id: 7, many: '7' },
  { id: 8, many: '8' },
  { id: 9, many: '9' },
  { id: 10, many: '10' },
];

const SIZE_LIST = [
  { id: 1, size: '250' },
  { id: 2, size: '260' },
  { id: 3, size: '270' },
  { id: 4, size: '280' },
  { id: 5, size: '290' },
  { id: 6, size: '300' },
];
