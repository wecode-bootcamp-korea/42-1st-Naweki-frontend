import React from 'react';
import { categoryData } from './data/categoryData';
import { colorData } from './data/colorData';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="categoryWrapper">
        <ul className="categorylists">
          {categoryData.map(category => (
            <li key={category.id} className="categoryList">
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="genderWrapper">
        <div className="title">
          <span>성별 ()</span>
          <i className="fa-light fa-sort-up" />
        </div>
        <div>
          <input name="men" type="checkbox" />
          <label htmlFor="men">남성</label>
        </div>
        <div>
          <input name="women" type="checkbox" />
          <label htmlFor="men">여성</label>
        </div>
        <div>
          <input name="unisex" type="checkbox" />
          <label htmlFor="men">유니섹스</label>
        </div>
      </div>

      <div className="colorWrapper">
        <div className="title">
          <span>색상 ()</span>
          <i className="fa-light fa-sort-up" />
        </div>
        <div className="color">
          {colorData.map(color => (
            <button key={color.id} className="colorBtn">
              <img className="colorImg" alt={color.alt} src={color.src} />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
