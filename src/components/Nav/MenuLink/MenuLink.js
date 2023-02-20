import React from 'react';
import { Link } from 'react-router-dom';
import ItemLists from '../ItemLists/ItemLists';
import './MenuLink.scss';

const MenuLink = ({ item }) => {
  return (
    <Link className="menuLink" key={item.id} to="/products">
      <ItemLists item={item} />
    </Link>
  );
};

export default MenuLink;
