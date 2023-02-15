import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Search from './Search/Search';
import Menu from './Menu/Menu';
import Function from './Function/Function';
import './Nav.scss';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const category = searchParams.get('category');
  // const limit = searchParams.get('limit');
  // const page = searchParams.get('page');
  // const sort = searchParams.get('sort');
  // const subCategory = searchParams.get('sub_category');
  // const gender = searchParams.get('gender');

  const [products, setProducts] = useState([]);

  const searchClicked = () => {
    setClicked(prev => !prev);
  };

  // useEffect(() => {
  //    fetch( 'http://10.58.52.93:3000/products?category=${category}&limit=${limit}&page=${page}&sort=${sort}&sub_category=${subCategory}&gender=${gender}', {
  //   method: ‘GET’,
  //   })
  //   .then(res=>res.json())
  //   .then(data=> {
  //   setProducts(data);
  //   });
  //   },  [category, limit, page, sort, subCategory, gender]);

  // localhost:3000/products?category=신발&limit=5&page=1&sort=productIdDesc&sub_category=라이프스타일&gender=남자

  useEffect(() => {
    fetch('http://localhost:3000/products', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

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
