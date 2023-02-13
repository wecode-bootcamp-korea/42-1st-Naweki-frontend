import React, { useState } from 'react';
import { CATEGORY_DATA } from './data/categoryData';
import { COLOR_DATA } from './data/colorData';
import './Aside.scss';

const Aside = ({ isFilterClicked }) => {
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
                <li key={category.id} className="categoryList">
                  {category.name}
                </li>
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
                      ? '/images/up.png'
                      : '/images/down.png'
                  }
                />
              </button>
            </div>
            {isGenderClicked === false && (
              <>
                <div>
                  <input name="men" type="checkbox" />
                  <label htmlFor="men">남성</label>
                </div>
                <div>
                  <input name="women" type="checkbox" />
                  <label htmlFor="women">여성</label>
                </div>
                <div>
                  <input name="unisex" type="checkbox" />
                  <label htmlFor="men">유니섹스</label>
                </div>
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
                      ? '/images/up.png'
                      : '/images/down.png'
                  }
                />
              </button>
            </div>
            {isColorClicked === false && (
              <div className="color">
                {COLOR_DATA.map(color => (
                  <button key={color.id} className="colorBtn">
                    <img className="colorImg" alt={color.alt} src={color.src} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </aside>
  );
};

export default Aside;
