import React, { useEffect, useState } from 'react';
import Aside from './Aside/Aside';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async api => {
    const response = await fetch(api);
    const json = await response.json();
    setProducts(json);
  };
  useEffect(() => {
    getProducts(`/data/productData.json`);
  }, []);

  return (
    <main className="productList">
      <Banner />
      <div className="contentWrapper">
        <Aside />
        <div className="productWrapper">
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductList;
