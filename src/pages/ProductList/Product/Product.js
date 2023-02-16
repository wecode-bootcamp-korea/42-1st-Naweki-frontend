import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ products }) => {
  const navigate = useNavigate();

  const toProductDetail = id => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <>
      {products.map(product => (
        <div
          className="product"
          key={product.id}
          onClick={() => {
            toProductDetail(product.id);
          }}
        >
          <img
            className="productImg"
            alt="Product Img"
            src="images/productList/product.jpg"
          />
          <div className="productDesc">
            {product.isNew === true && <span className="new">신상품</span>}
            <span className="name">{product.name}</span>
            <span className="style">{product.gender} 신발</span>
            <span className="color">{product.color}</span>
            {product.reduced_price !== null ? (
              <div className="reducedPriceWrapper">
                <span className="reducedPrice">{product.reduced_price} 원</span>
                <span className="price">{product.price} 원</span>
              </div>
            ) : (
              <div className="priceWrapper">
                <span className="price">{product.price} 원</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
