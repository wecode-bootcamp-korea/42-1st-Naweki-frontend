import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import Function from './Function/Function';
import './Nav.scss';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const searchClicked = () => {
    setClicked(prev => !prev);
  };

  return (
    <nav className="nav">
      <div className="profileWrapper">
        <img
          className="profileImg"
          alt="Profile Img"
          src="/images/profile.png"
        />
        <p> 김코딩님, 안녕하세요</p>
      </div>
      <div className="bottomWrapper">
        {clicked ? (
          <Search searchClicked={searchClicked} />
        ) : (
          <>
            <div className="logoWrapper">
              <Link className="toMain" to="/">
                <img className="logo" alt="Logo Img" src="images/logo.jpg" />
              </Link>
            </div>

            <Menu />

            <Function searchClicked={searchClicked} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
