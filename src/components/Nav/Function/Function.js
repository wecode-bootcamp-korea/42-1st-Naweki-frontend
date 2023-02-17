import React from 'react';
import { Link } from 'react-router-dom';

const Function = ({ searchClicked }) => {
  return (
    <div className="function">
      <input
        className="searchBar"
        type="text"
        placeholder="검색"
        onClick={searchClicked}
      />
      <img className="navIcon" alt="Heart Img" src="images/nav/heart.png" />
      <Link to="/cart">
        <img className="navIcon" alt="Cart Img" src="images/nav/cart.png" />
      </Link>
    </div>
  );
};

export default Function;
