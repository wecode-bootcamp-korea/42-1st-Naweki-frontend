import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ keyword, filteredList }) => {
  return (
    <div className="searchBox">
      {keyword.length > 0 ? (
        <>
          <div className="filteredListWrapper">
            {filteredList.map(product => (
              <div className="filteredItem" key={product.id}>
                <img
                  className="productImg"
                  alt={product.name}
                  src={product.img}
                />
                <p className="productName">{product.name}</p>
                <p className="productGender">{product.style}</p>
                <p className="productPrice">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="blur" />
        </>
      ) : (
        <>
          <div className="mostSearchedWrapper">
            <div className="termWrapper">
              <p className="mostSearchedTerm">인기 검색어</p>
              <p className="term">Force 1</p>
              <p className="term">Michael</p>
              <p className="term">Max</p>
              <p className="term">Blazer</p>
            </div>
          </div>
          <div className="blur" />
        </>
      )}
    </div>
  );
};

export default SearchBox;
