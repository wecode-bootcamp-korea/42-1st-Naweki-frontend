import React from 'react';
import MenuBox from './MenuBox/MenuBox';
import { menuData } from './data/menuData';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logoWrapper">
        <img className="logo" alt="Logo Img" src="images/logo.jpg" />
      </div>

      <div className="menuWrapper">
        <ul className="menuLists">
          {menuData.map(menu => {
            return (
              <li className="menuList" key={menu.id}>
                {menu.name}
              </li>
            );
          })}
        </ul>

        <MenuBox className="menubox" />
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
