import React from 'react';
import './CartProduct.scss';

const CartProduct = ({ cart }) => {
  const { style_id, size, color, quantity, price } = cart;

  return (
    <div className="cartProduct">
      <img className="productImg" alt="Product Img" src="images/logo.jpg" />
      <div className="productDescWrapper">
        <div className="productName">나이키 마이클 러닝화</div>
        <ul>
          <li>스타일번호 : {style_id}</li>
          <li>사이즈 : {size}</li>
          <li>컬러 : {color}</li>
          <li>
            수량 : {quantity} / {price}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartProduct;
