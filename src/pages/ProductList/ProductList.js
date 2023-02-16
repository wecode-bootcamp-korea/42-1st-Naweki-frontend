import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Aside from './Aside/Aside';
import Banner from './Banner/Banner';
import Product from './Product/Product';
import { CATEGORY_DATA } from './Aside/data/categoryData';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const location = useLocation();
  const category = location.search;

  // TODO: mock data 사용 시
  // useEffect(() => {
  //   fetch('./data/productData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data);
  //     });
  // }, []);

  // TODO: api 연결 시
  useEffect(() => {
    fetch(`http://10.58.52.214:3000/products${category}`, {
      method: 'GET',
    })
      .then(res => {
        res.json();
      })
      .then(data => {
        setProducts(data.data);
      });
  }, []);

  const onClickFilter = () => {
    setIsFilterClicked(prev => !prev);
  };

  return (
    <main className="productList">
      <Banner onClickFilter={onClickFilter} />
      <div className="contentWrapper">
        <Aside
          isFilterClicked={isFilterClicked}
          products={products}
          CATEGORY_DATA={CATEGORY_DATA}
        />
        <div className="productWrapper">
          <Product products={products} isFilterClicked={isFilterClicked} />
        </div>
      </div>
    </main>
  );
};

export default ProductList;
