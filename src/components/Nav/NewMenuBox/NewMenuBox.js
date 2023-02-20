import React from 'react';
import {
  NEW_ITEMS,
  MEN_ITEMS,
  WOMEN_ITEMS,
  KIDS_ITEMS,
  ACC_ITEMS,
} from '../data/newMenuBoxData';
import './NewMenuBox.scss';
import MenuLink from '../MenuLink/MenuLink';

const NewMenuBox = ({ isShown, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="newMenuBox">
      {isShown && (
        <>
          <div
            className="newMenuBoxWrapper"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="itemWrapper">
              {NEW_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {MEN_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {WOMEN_ITEMS.map(item => {
                return <MenuLink key={item.id} item={item} />;
              })}
            </div>
            <div className="itemWrapper">
              {KIDS_ITEMS.map(item => {
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

export default NewMenuBox;
