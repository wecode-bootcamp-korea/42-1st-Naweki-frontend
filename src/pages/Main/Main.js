import React from 'react';
import Feel from './Feel/Feel';
import Leggings from './Leggings/Leggings';
import Infinite from './Infinite/Infinite';
import Methcon from './Methcon/Methcon';
import Dan from './Dan/Dan';
import Category from './Category/Category';
import RecommendItem from '../../components/RecommendItem/RecommendItem';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Feel />
      <Leggings />
      <Infinite />
      <Methcon />
      <Dan />
      <Category />
      <div className="recommendItem">
        <RecommendItem />
      </div>
    </div>
  );
}

export default Main;
