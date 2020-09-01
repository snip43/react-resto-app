import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import withRestoService from '../hoc/';
import { Route, withRouter } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({ RestoService }) => {
  console.log(RestoService.getMenuItems());
  return (
    <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
      <Route path="/" render={() => <AppHeader total={50} />} />
      <Route path="/menu" component={MainPage} />
      <Route path="/cart" component={CartPage} />
    </div>
  );
};

export default withRestoService()(withRouter(App));
