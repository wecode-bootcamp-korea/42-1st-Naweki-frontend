import React from 'react';
import { COLOR_DATA } from '../Aside/data/colorData';
import './Color.scss';

const Color = () => {
  return (
    <div className="color">
      {COLOR_DATA.map(color => (
        <button key={color.id} className="colorBtn">
          <div className={color.name} id="colorImg" />
          <span>{color.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Color;
