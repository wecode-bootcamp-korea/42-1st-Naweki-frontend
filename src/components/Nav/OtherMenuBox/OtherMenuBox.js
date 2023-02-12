import React from 'react';
import ItemLists from '../ItemLists/ItemLists';
import {
  NEW_ITEMS,
  SHOES_ITEMS,
  CLOTHING_ITEMS,
  ACC_ITEMS,
} from '../data/otherMenuBoxData';
import './OtherMenuBox.scss';

const NewMenuBox = ({ isShown, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="otherMenuBox"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isShown &
      (
        <div className="otherMenuBoxWrapper">
          <div className="itemWrapper">
            {NEW_ITEMS.map(item => {
              return <ItemLists key={item.id} item={item} />;
            })}
          </div>
          <div className="itemWrapper">
            {SHOES_ITEMS.map(item => {
              return <ItemLists key={item.id} item={item} />;
            })}
          </div>
          <div className="itemWrapper">
            {CLOTHING_ITEMS.map(item => {
              return <ItemLists key={item.id} item={item} />;
            })}
          </div>
          <div className="itemWrapper">
            {ACC_ITEMS.map(item => {
              return <ItemLists key={item.id} item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewMenuBox;
