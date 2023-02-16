import React from 'react';
import './HiddenCategory.scss';

function HiddenCategory() {
  return (
    <div className="hiddenCategory">
      <div className="categoryBox">
        <ul className="hiddenCategoryDetail">
          <li>블레이저 1</li>
          <li>리액트</li>
          <li>페가소스</li>
        </ul>
      </div>

      <div className="categoryBox">
        <ul className="hiddenCategoryDetail">
          <li>테니스 신발</li>
          <li>트레이닝 신발</li>
          <li>Sale 신발</li>
        </ul>
      </div>

      <div className="categoryBox">
        <ul className="hiddenCategoryDetail">
          <li>조거 & 스웻팬츠</li>
          <li>스포츠 브라</li>
          <li>팬츠 & 타이츠</li>
          <li>양말</li>
          <li>요가</li>
          <li>Naweki Lab</li>
          <li>Sale 의류</li>
        </ul>
      </div>

      <div className="categoryBox">
        <ul className="categoryDetail">
          <li>키즈 댄 신발</li>
          <li>키즈 의류</li>
          <li>키즈 백팩</li>
          <li>키즈 양말</li>
          <li>Sale 키즈</li>
        </ul>
      </div>
    </div>
  );
}

export default HiddenCategory;
