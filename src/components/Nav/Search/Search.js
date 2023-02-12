import React, { useState, useEffect } from 'react';
import './Search.scss';

const Search = ({ searchClicked }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch('/data/productData.json');
      const data = await res.json();
      setProducts(data);
    })();
  }, [keyword]);

  const onChange = e => {
    setKeyword(e.target.value);
  };

  const filteredList = products.filter(product =>
    product.name.includes(keyword)
  );

  return (
    <div className="search">
      <div className="logoWrapper">
        <img className="logo" alt="Logo Img" src="images/logo.jpg" />
      </div>
      <div>
        <input
          className="searchBarWide"
          type="text"
          placeholder="검색"
          value={keyword}
          onChange={onChange}
        />
        {keyword.length > 0 ? (
          <div className="filteredListWrapper">
            {filteredList.map(product => (
              <div className="filteredItem" key={product.id}>
                <img
                  className="productImg"
                  alt={product.name}
                  src={product.img}
                />
                <p className="productName">{product.name}</p>
                <p className="productGender">{product.gender} 신발</p>
                <p className="productPrice">{product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mostSearchedWrapper">
            <p className="mostSearchedTerm">인기 검색어</p>
            <p className="term">Force 1</p>
            <p className="term">Michael</p>
            <p className="term">Max</p>
            <p className="term">Blazer</p>
          </div>
        )}
      </div>
      <button className="back" onClick={searchClicked}>
        취소
      </button>
    </div>
  );
};

export default Search;
