import React from 'react';
import {
  newItems,
  menItems,
  womenItems,
  kidsItems,
  accItems,
} from '../data/menuItemData';
import './MenuBox.scss';

const MenuBox = () => {
  return (
    <div className="menuBox">
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
  );
};

export default MenuBox;
