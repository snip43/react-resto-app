import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deletedFromCart } from '../../actions';

const CartTable = ({ items, deletedFromCart }) => {
  return (
    <>
      <div className="cart__title"> Ваш заказ: </div>
      <div className="cart__list">
        {items.map((itemCart) => {
          const { url, title, price, id } = itemCart;
          return (
            <div className="cart__item" key={id}>
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div onDelete={() => deletedFromCart(id)} className="cart__close">
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};
const mapDispatchToProps = {
  deletedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
