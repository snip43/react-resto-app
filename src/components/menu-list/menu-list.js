import React from 'react';
import MenuListItem from '../menu-list-item';
// import WithRestoService from '../hoc';
// import { connect } from 'react-redux';
// import { menuLoaded, menuRequseted, menuError } from '../../actions/';
import Spinner from '../spinner/';
import Error from '../error';

import './menu-list.scss';

const MenuList = ({ menuItems, loading, error, addedToCart }) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ul className="menu__list">
      {menuItems.map((menuItem) => {
        return <MenuListItem addedToCart={addedToCart} key={menuItem.id} menuItem={menuItem} />;
      })}
    </ul>
  );
};

export default MenuList;
