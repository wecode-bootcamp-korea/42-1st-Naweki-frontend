import React from 'react';
import {
  NEW_ITEMS,
  SHOES_ITEMS,
  CLOTHING_ITEMS,
  ACC_ITEMS,
} from '../data/otherMenuBoxData';
import './OtherMenuBox.scss';
import MenuLink from '../MenuLink/MenuLink';

const OtherMenuBox = ({ isShown, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="otherMenuBox">
      {isShown && (
        <>
          <div
            className="otherMenuBoxWrapper"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="itemWrapper">
              {NEW_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {SHOES_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {CLOTHING_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {ACC_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
          </div>

          <div className="blur" />
        </>
      )}
    </div>
  );
};

export default OtherMenuBox;
