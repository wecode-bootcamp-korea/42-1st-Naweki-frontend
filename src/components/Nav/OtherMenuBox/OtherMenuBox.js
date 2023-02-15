import React from 'react';
import { Link } from 'react-router-dom';
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
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?isNew=true"
                  >
                    <ItemLists item={item} />
                  </Link>
                );
              })}
            </div>
            <div className="itemWrapper">
              {SHOES_ITEMS.map(item => {
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?sub_category=신발"
                  >
                    <ItemLists item={item} />
                  </Link>
                );
              })}
            </div>
            <div className="itemWrapper">
              {CLOTHING_ITEMS.map(item => {
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?sub_category=의류"
                  >
                    <ItemLists item={item} />
                  </Link>
                );
              })}
            </div>
            <div className="itemWrapper">
              {ACC_ITEMS.map(item => {
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?sub_category=용품"
                  >
                    <ItemLists item={item} />
                  </Link>
                );
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
