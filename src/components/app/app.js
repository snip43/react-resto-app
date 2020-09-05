import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Background from './food-bg.jpg';

const App = ({ totalPrice }) => {
  return (
    <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
      <AppHeader total={totalPrice} />
      <Switch>
        <Route exact path="/menu" component={MainPage} />
        <Route exact path="/cart" component={CartPage} />
        {/* <Route path = '/:id'  component={ItemPage}/> */}
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ totalPrice }) => {
  return {
    totalPrice,
  };
};

export default connect(mapStateToProps)(App);
