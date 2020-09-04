import React, { Component } from 'react';
import MenuList from '../menu-list';
import { connect } from 'react-redux';
import { menuLoaded, menuRequseted, menuError } from '../../actions/';

import WithRestoService from '../hoc/';

class MainPage extends Component {
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

    return <MenuList menuItems={menuItems} loading={loading} error={error} />;
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

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MainPage));
