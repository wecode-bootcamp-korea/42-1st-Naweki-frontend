import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GENDER_DATA } from './data/genderData';
import Color from '../Color/Color';
import './Aside.scss';

const Aside = ({ isFilterClicked, products, CATEGORY_DATA }) => {
  const [isGenderClicked, setIsGenderClicked] = useState(false);
  const [isColorClicked, setIsColorClicked] = useState(false);

  const onClickGenderUp = () => {
    setIsGenderClicked(prev => !prev);
  };

  const onClickColorUp = () => {
    setIsColorClicked(prev => !prev);
  };

  return (
    <aside className="aside">
      {isFilterClicked === false && (
        <>
          <div className="categoryWrapper">
            <ul className="categorylists">
              {CATEGORY_DATA.map(category => (
                <Link
                  className="categoryLink"
                  key={category.id}
                  to={`/products?subCategory=${category.subCategory}`}
                >
                  <li className="categoryList">{category.subCategory}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="genderWrapper">
            <div className="title">
              <span>성별</span>
              <button className="asideBtn" onClick={onClickGenderUp}>
                <img
                  className="asideIcon"
                  alt="Icon Img"
                  src={
                    isGenderClicked === false
                      ? '/images/productList/up.png'
                      : '/images/productList/down.png'
                  }
                />
              </button>
            </div>
            {isGenderClicked === false && (
              <>
                {GENDER_DATA.map(gender => (
                  <div key={gender.id}>
                    <input
                      className="gender"
                      name={gender.name}
                      type="checkbox"
                    />
                    <label htmlFor={gender.name}>{gender.name}</label>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="colorWrapper">
            <div className="title">
              <span>색상</span>
              <button className="asideBtn" onClick={onClickColorUp}>
                <img
                  className="asideIcon"
                  alt="Icon Img"
                  src={
                    isColorClicked === false
                      ? '/images/productList/up.png'
                      : '/images/productList/down.png'
                  }
                />
              </button>
            </div>
            {isColorClicked === false && <Color products={products} />}
          </div>
        </>
      )}
    </aside>
  );
};

export default Aside;
