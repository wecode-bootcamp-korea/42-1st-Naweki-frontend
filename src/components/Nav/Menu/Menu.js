import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menuData';
import NewMenuBox from '../NewMenuBox/NewMenuBox';
import OtherMenuBox from '../OtherMenuBox/OtherMenuBox';
import './Menu.scss';

const Menu = () => {
  const [isShown, setIsShown] = useState(false);
  const [menuId, setMenuId] = useState(0);

  const onMouseEnter = () => setIsShown(true);
  const onMouseLeave = () => setIsShown(false);
  const onMouseEnterList = id => setMenuId(id);

  return (
    <div className="menu">
      <ul className="menuLists" onMouseEnter={onMouseEnter}>
        {MENU_DATA.map(menu => {
          return (
            <Link className="toProductList" key={menu.id} to="/main">
              <li
                className="menuList"
                onMouseEnter={() => onMouseEnterList(menu.id)}
                id={menu.id}
              >
                {menu.name}
              </li>
            </Link>
          );
        })}
      </ul>
      {menuId === 1 ? (
        <NewMenuBox
          className="menubox"
          isShown={isShown}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
        />
      ) : (
        (menuId === 2 || menuId === 3 || menuId === 4) && (
          <OtherMenuBox
            className="menubox"
            isShown={isShown}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
          />
        )
      )}
    </div>
  );
};

export default Menu;
