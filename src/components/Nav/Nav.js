import React from 'react';
// import { menuData } from './data/menuData';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logoWrapper">
        <img className="logo" alt="Logo Img" src="images/logo.jpg" />
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
        <i className="far fa-heart" />
        <i className="fas fa-shopping-bag" />
      </div>
    </nav>
  );
};

export default Nav;
