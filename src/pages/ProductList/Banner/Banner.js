import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="category">남성신발 ()</h1>
      <div className="functionWrapper">
        <div className="function">
          <span className="filter">필터 숨기기</span>
          <i className="fa-light fa-sliders-simple" />
        </div>
        <div className="function">
          <span className="sort">정렬 기준:</span>
          <i className="fa-light fa-sort-up" />
          <i className="fa-light fa-sort-down" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
