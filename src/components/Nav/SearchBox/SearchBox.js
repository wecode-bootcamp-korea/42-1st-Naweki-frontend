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
                <div className="productName">{product.name}</div>
                <div className="productGender">{product.style}</div>
                <div className="productPrice">{product.price}</div>
              </div>
            ))}
          </div>
          <div className="blur" />
        </>
      ) : (
        <>
          <div className="mostSearchedWrapper">
            <div className="termWrapper">
              <div className="mostSearchedTerm">인기 검색어</div>
              <div className="term">Force 1</div>
              <div className="term">Michael</div>
              <div className="term">Max</div>
              <div className="term">Blazer</div>
            </div>
          </div>
          <div className="blur" />
        </>
      )}
    </div>
  );
};

export default SearchBox;
