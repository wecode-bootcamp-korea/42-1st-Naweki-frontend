import React from 'react';
import './Product.scss';

const Product = ({ product }) => {
  const { thumbnailImage, isNew, name, gender, color, price, reduced_price } =
    product;

  return (
    <div className="product">
      <img
        className="productImg"
        alt="Product Img"
        src="images/productList/product.jpg"
      />
      <div className="productDesc">
        {isNew === true && <span className="new">신상품</span>}
        <span className="name">{name}</span>
        <span className="style">{gender} 신발</span>
        <span className="color">{color}</span>
        {reduced_price !== null ? (
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
