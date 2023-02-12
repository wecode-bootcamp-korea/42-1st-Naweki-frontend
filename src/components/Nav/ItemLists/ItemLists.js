import React from 'react';
import './ItemLists.scss';

const ItemLists = ({ item }) => {
  return (
    <ul key={item.id}>
      <li className="itemList" id={item.id}>
        {item.name}
      </li>
    </ul>
  );
};

export default ItemLists;
