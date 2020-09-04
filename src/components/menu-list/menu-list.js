import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { menuLoaded, menuRequseted, menuError } from '../../actions/';
import Spinner from '../spinner/';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequseted();

    const { RestoService } = this.props;
    RestoService.getMenuItems().then((res) => this.props.menuLoaded(res));
  }

  componentDidCatch() {
    this.props.menuError();
  }

  render() {
    const { menuItems, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }

    return (
      <ul className="menu__list">
        {menuItems.map((menuItem) => {
          return <MenuListItem key={menuItem.id} menuItem={menuItem} />;
        })}
        ;
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = {
  menuLoaded,
  menuRequseted,
  menuError,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
