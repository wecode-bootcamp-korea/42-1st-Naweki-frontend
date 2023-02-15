import React, { useEffect, useState } from 'react';
import Aside from './Aside/Aside';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  // TODO : mock data 사용 시
  useEffect(() => {
    fetch('./data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  // TODO : api 활용 시
  // useEffect(() => {
  //   fetch('http://10.58.52.69:3000/products', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data.data);
  //     });
  // }, []);

  const onClickFilter = () => {
    setIsFilterClicked(prev => !prev);
  };

  return (
    <main className="productList">
      <Banner onClickFilter={onClickFilter} />
      <div className="contentWrapper">
        <Aside isFilterClicked={isFilterClicked} products={products} />
        <div className="productWrapper">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              isFilterClicked={isFilterClicked}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductList;
