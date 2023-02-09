import React from 'react';
import {
  newItems,
  menItems,
  womenItems,
  kidsItems,
  accItems,
} from '../data/menuBoxData';
import './MenuBox.scss';

const MenuBox = ({ isShown, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="menuBox"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isShown ? (
        <div className="menuBoxWrapper">
          <div className="itemWrapper">
            {newItems.map(item => {
              return (
                <ul key={item.id} className="itemLists">
                  <li className="itemList" id={item.id}>
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="itemWrapper">
            {menItems.map(item => {
              return (
                <ul key={item.id} className="itemLists">
                  <li className="itemList" id={item.id}>
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="itemWrapper">
            {womenItems.map(item => {
              return (
                <ul key={item.id} className="itemLists">
                  <li className="itemList" id={item.id}>
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="itemWrapper">
            {kidsItems.map(item => {
              return (
                <ul key={item.id} className="itemLists">
                  <li className="itemList" id={item.id}>
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="itemWrapper">
            {accItems.map(item => {
              return (
                <ul key={item.id} className="itemLists">
                  <li className="itemList" id={item.id}>
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MenuBox;
