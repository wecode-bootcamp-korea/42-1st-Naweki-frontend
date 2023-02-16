import React from 'react';
import Category from './Category/Category';
import Feel from './Feel/Feel';
import Leggings from './Leggings/Leggings';
import Infinite from './Infinite/Infinite';
import Methcon from './Methcon/Methcon';
import Dan from './Dan/Dan';
// import Trending from './Trending/Trending';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Feel />
      <Leggings />
      <Infinite />
      <Methcon />
      <Dan />
      {/* <Trending /> */}
      <Category />
    </div>
  );
}

export default Main;
