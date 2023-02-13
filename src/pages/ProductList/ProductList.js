import React, { useEffect, useState } from 'react';
import Aside from './Aside/Aside';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const getProducts = async api => {
    const response = await fetch(api);
    const json = await response.json();
    setProducts(json);
  };
  useEffect(() => {
    getProducts(`/data/productData.json`);
  }, []);

  const onClickFilter = () => {
    setIsFilterClicked(prev => !prev);
  };

  return (
    <main className="productList">
      <Banner onClickFilter={onClickFilter} />
      <div className="contentWrapper">
        <Aside isFilterClicked={isFilterClicked} />
        <div className="productWrapper">
          {products.map(product => (
            <Product
              key={product.id}
              {...product}
              isFilterClicked={isFilterClicked}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductList;
