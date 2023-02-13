import React from 'react';
import './Product.scss';

const Product = ({ ...product }) => {
  const { alt, img, isNew, name, style, color, price, reduced_price } = product;

  return (
    <div className="product">
      <img className="productImg" alt={alt} src={img} />
      <div className="productDesc">
        {isNew === true && <span className="new">신상품</span>}
        <span className="name">{name}</span>
        <span className="style">{style}</span>
        <span className="color">{color}개 색상</span>
        {product.reduced_price !== '' ? (
          <div className="reducedPriceWrapper">
            <span className="reducedPrice">{reduced_price} 원</span>
            <span className="price">{price} 원</span>
          </div>
        ) : (
          <div className="priceWrapper">
            <span className="price">{price} 원</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
