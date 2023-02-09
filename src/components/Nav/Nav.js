import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBox from './MenuBox/MenuBox';
import { menuData } from './data/menuData';
import Search from './Search/Search';
import './Nav.scss';

const Nav = () => {
  const [isShown, setIsShown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseEnter = () => setIsShown(true);
  const onMouseLeave = () => setIsShown(false);
  const searchClicked = () => {
    setClicked(prev => {
      return !prev;
    });
  };

  return (
    <nav className="nav">
      {clicked ? (
        <Search searchClicked={searchClicked} />
      ) : (
        <>
          <div className="logoWrapper">
            <Link className="toMain" to="/">
              <img className="logo" alt="Logo Img" src="images/logo.jpg" />
            </Link>
          </div>

          <div
            className="menuWrapper"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <ul className="menuLists">
              {menuData.map(menu => {
                return (
                  <Link
                    className="toProductList"
                    to="/product-list"
                    key={menu.id}
                  >
                    <li className="menuList">{menu.name}</li>
                  </Link>
                );
              })}
            </ul>

            <MenuBox
              className="menubox"
              isShown={isShown}
              onMouseEnter={onMouseEnter}
            />
          </div>

          <div className="functionWrapper">
            <input
              className="searchBar"
              type="text"
              placeholder="검색"
              onClick={searchClicked}
            />
            <img className="navIcon" alt="Heart Img" src="images/heart.png" />
            <Link to="/cart">
              <img className="navIcon" alt="Cart Img" src="images/cart.png" />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
