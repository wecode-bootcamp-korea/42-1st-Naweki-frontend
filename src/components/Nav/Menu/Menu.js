import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menuData';
import NewMenuBox from '../NewMenuBox/NewMenuBox';
import OtherMenuBox from '../OtherMenuBox/OtherMenuBox';
import './Menu.scss';

const Menu = () => {
  const [isShown, setIsShown] = useState(false);
  const [isNew, setIsNew] = useState(true);

  const onMouseEnter = () => setIsShown(true);
  const onMouseLeave = () => setIsShown(false);
  const onMouseHover = () => setIsNew(false);

  return (
    <div className="menu">
      <div
        className="menuWrapper"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {MENU_DATA.map(menu => {
          return (
            <>
              <ul className="menuLists" key={menu.id}>
                <Link className="toProductList" to="/product-list">
                  <li className="menuList" onMouseHover={onMouseHover}>
                    {menu.name}
                  </li>
                </Link>
              </ul>

              <NewMenuBox className="menubox" isShown={isShown} isNew={isNew} />

              {/* {menu.id === 1 ? (
                <NewMenuBox
                  className="menubox"
                  isShown={isShown}
                  isNew={isNew}
                />
              ) : (
                <OtherMenuBox
                  className="menubox"
                  isShown={isShown}
                  isNew={isNew}
                />
              )} */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
