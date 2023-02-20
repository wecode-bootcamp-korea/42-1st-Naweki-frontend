import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import Function from './Function/Function';
import './Nav.scss';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const userToken = localStorage.getItem('USERTOKEN');

  const searchClicked = () => {
    setClicked(prev => !prev);
  };

  return (
    <nav className="nav">
      <div className="profileWrapper">
        {userToken === null ? (
          <div className="textWrapper">
            <Link className="guest" to="/signup">
              가입하기
            </Link>
            |
            <Link className="guest" to="/login">
              로그인
            </Link>
          </div>
        ) : (
          <>
            <img
              className="profileImg"
              alt="Profile Img"
              src="/images/nav/profile.png"
            />
            <p> 고객님, 안녕하세요</p>
          </>
        )}
      </div>
      <div className="bottomWrapper">
        {clicked ? (
          <Search searchClicked={searchClicked} />
        ) : (
          <>
            <div className="logoWrapper">
              <Link className="toMain" to="/">
                <img
                  className="logo"
                  alt="Logo Img"
                  src="images/nav/logo.jpg"
                />
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
