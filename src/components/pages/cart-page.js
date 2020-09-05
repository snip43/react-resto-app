import React from 'react';
import CartTable from '../cart-table';
import { connect } from 'react-redux';
import { deletedFromCart, upQtty, downQtty } from '../../actions/';

const CartPage = ({ items, deletedFromCart, upQtty, downQtty }) => {
  return (
    <div className="cart">
      <CartTable
        items={items}
        deletedFromCart={deletedFromCart}
        upQtty={upQtty}
        downQtty={downQtty}
      />
    </div>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};
const mapDispatchToProps = {
  deletedFromCart,
  upQtty,
  downQtty,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
