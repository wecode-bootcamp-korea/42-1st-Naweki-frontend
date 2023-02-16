import React from 'react';
import { Link } from 'react-router-dom';
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
              {MEN_ITEMS.map(item => {
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?isNew=true&gender=남자"
                  >
                    <ItemLists item={item} />
                  </Link>
                );
              })}
            </div>
            <div className="itemWrapper">
              {WOMEN_ITEMS.map(item => {
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?isNew=true&gender=여자"
                  >
                    <ItemLists item={item} />
                  </Link>
                );
              })}
            </div>
            <div className="itemWrapper">
              {KIDS_ITEMS.map(item => {
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
              {ACC_ITEMS.map(item => {
                return (
                  <Link
                    className="menuLink"
                    key={item.id}
                    to="/products?isNew=true&sub_category=용품"
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
