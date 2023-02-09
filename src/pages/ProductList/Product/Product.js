import React from 'react';
import './Product.scss';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="productImg" alt={product.alt} src={product.img} />
      <div className="productDesc">
        {product.new === true && <span>신상품</span>}
        <span>{product.name}</span>
        <span>{product.style}</span>
        <span>{product.color}개 색상</span>
        <br />
        <span>{product.price} 원</span>
      </div>
    </div>
  );
};

export default Product;
