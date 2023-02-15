import React, { useState } from 'react';
import './Category.scss';
import HiddenCategory from '../HiddenCategory/HiddenCategory';

function Category() {
  return (
    <div className="category">
      <div className="defaultCategory">
        <div className="categoryBox">
          <div className="categoryName">Featured</div>
          <ul className="categoryDetail">
            <li>에얼 포스 1</li>
            <li>댄 1</li>
            <li>에얼 맥스 98</li>
            <li>에얼 맥스 90</li>
          </ul>
        </div>

        <div className="categoryBox">
          <div className="categoryName">신발</div>
          <ul className="categoryDetail">
            <li>전체 보기</li>
            <li>댄 신발</li>
            <li>러닝 신발</li>
            <li>농구 신발</li>
          </ul>
        </div>

        <div className="categoryBox">
          <div className="categoryName">의류</div>
          <ul className="categoryDetail">
            <li>전체 보기</li>
            <li>탐 & 티셔츠</li>
            <li>쇼츠</li>
            <li>후디 % 풀오버</li>
          </ul>
        </div>

        <div className="categoryBox">
          <div className="categoryName">Kids</div>
          <ul className="categoryDetail">
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
