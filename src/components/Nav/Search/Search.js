import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Search.scss';

const Search = ({ searchClicked }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  // TODO: mock 데이터 연결
  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [keyword]);

  // TODO: api 활용 시
  // useEffect(() => {
  //   fetch('http://10.58.52.69:3000/products', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data.data);
  //     });
  // }, []);

  const onChange = e => {
    setKeyword(e.target.value);
  };

  const filteredList = products
    .filter(product => product.name.includes(keyword))
    .slice(0, 5);

  return (
    <div className="search">
      <div className="searchTop">
        <div className="logoWrapper">
          <img className="logo" alt="Logo Img" src="images/nav/logo.jpg" />
        </div>

        <input
          className="searchBarWide"
          type="text"
          placeholder="검색"
          value={keyword}
          onChange={onChange}
        />
        <button className="back" onClick={searchClicked}>
          취소
        </button>
      </div>
      <SearchBox filteredList={filteredList} keyword={keyword} />
    </div>
  );
};

export default Search;
