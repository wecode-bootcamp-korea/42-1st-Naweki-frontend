import './CartList.scss';

export const CartList = () => {
  return (
    <div className="cartList">
      <div className="productContainer">
        <div className="imgWrapper">
          <img
            src="images/mockdata/nike_cart_mock1.jpg"
            alt="something"
            className="cartImage"
          />
        </div>
        <div className="productInfoWrapper">
          <div className="productName">나이키 에어 포스 1 스컬프트</div>
          <div className="productCategory">여성 신발</div>
          <div className="productDetail">화이트/세일/스타디움 그린</div>
          <div className="selectorWrapper">
            <div className="size">사이즈</div>
            <select name="sizes" id="sizeSelect" className="productSize">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <div className="number">수량</div>
            <select name="howMany" id="howMany" className="howManyProduct">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="btnWrapper">
            <button className="heartBtn">
              <img src="images/heart-regular.png" />
            </button>
            <button className="trashBtn">
              <img src="images/trash-can-regular.png" />
            </button>
          </div>
        </div>
        <div className="priceWrapper">
          <div className="originPrice">279,000원</div>
          <div className="reducedPrice">223,200원</div>
        </div>
      </div>
      <div className="shippingInfo">
        <div className="shipPrice">무료 배송</div>
        <div className="arrivalBox">
          도착 예정일: <div className="date">2월 15일 (수)</div>{' '}
          <button className="location">지역 수정</button>
        </div>
      </div>
    </div>
  );
};
