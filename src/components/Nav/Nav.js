import React from 'react';
// import { menuData } from './data/menuData';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logoWrapper">
        <img className="logo" alt="Logo Img" />
      </div>
      <div className="menuWrapper">
        <ul className="menuLists">
          <li className="menuList">New Releases</li>
          <li className="menuList">Men</li>
          <li className="menuList">Women</li>
          <li className="menuList">Kids</li>
          <li className="menuList">Sale</li>
          <li className="menuList">SNEAKERS</li>
          <li className="menuList">FEEL YOUR ALL</li>
        </ul>
      </div>
      <div className="functionWrapper">
        <input className="searchBar" type="text" placeholder="검색" />
        <i className="fa-light fa-heart" />
        <i className="fa-light fa-cart-shopping" />
      </div>
    </nav>
  );
};

export default Nav;
