import React from 'react';
import './Category.scss';
import HiddenCategory from '../HiddenCategory/HiddenCategory';
import {
  SHOES_CATEGORY_DATA,
  SPORTS_SHOES_CATEGORY_DATA,
  CLOTHES_CATEGORY_DATA,
  KIDS_CATEGORY_DATA,
} from './categoryData';

function Category() {
  return (
    <div className="category">
      <div className="defaultCategory">
        <div className="categoryBox">
          <div className="categoryName">Featured</div>
          <ul className="categoryDetail">
            {SHOES_CATEGORY_DATA.map(category => (
              <li key={category.id}>{category.title}</li>
            ))}
          </ul>
        </div>

        <div className="categoryBox">
          <div className="categoryName">신발</div>
          <ul className="categoryDetail">
            {SPORTS_SHOES_CATEGORY_DATA.map(category => (
              <li key={category.id}>{category.title}</li>
            ))}
          </ul>
        </div>

        <div className="categoryBox">
          <div className="categoryName">의류</div>
          <ul className="categoryDetail">
            {CLOTHES_CATEGORY_DATA.map(category => (
              <li key={category.id}>{category.title}</li>
            ))}
          </ul>
        </div>

        <div className="categoryBox">
          <div className="categoryName">Kids</div>
          <ul className="categoryDetail">
            {KIDS_CATEGORY_DATA.map(category => (
              <li key={category.id}>{category.title}</li>
            ))}
            <li>베이비 신발</li>
            <li>키즈 신발</li>
            <li>키즈 농구 신발</li>
            <li>키즈 러닝 신발</li>
          </ul>
        </div>
      </div>

      <HiddenCategory />
    </div>
  );
}

export default Category;
