import React from 'react';
import ItemLists from '../ItemLists/ItemLists';
import {
  NEW_ITEMS,
  MEN_ITEMS,
  WOMEN_ITEMS,
  KIDS_ITEMS,
  ACC_ITEMS,
} from '../data/newMenuBoxData';
import './NewMenuBox.scss';

const NewMenuBox = ({ isShown, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="newMenuBox"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isShown && (
        <>
          <div className="newMenuBoxWrapper">
            <div className="itemWrapper">
              {NEW_ITEMS.map(item => {
                return <ItemLists key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {MEN_ITEMS.map(item => {
                return <ItemLists key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {WOMEN_ITEMS.map(item => {
                return <ItemLists key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {KIDS_ITEMS.map(item => {
                return <ItemLists key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {ACC_ITEMS.map(item => {
                return <ItemLists key={item.id} item={item} />;
              })}
            </div>
          </div>

          <div className="blur" />
        </>
      )}
    </div>
  );
};

export default NewMenuBox;
