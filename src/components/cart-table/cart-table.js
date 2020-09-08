import React from 'react';
import './cart-table.scss';

const CartTable = ({ items, deletedFromCart, upQtty, downQtty }) => {
  if (items.length === 0) {
    return (
      <>
        <div className="cart__title"> Ваша корзина пуста </div>
        <div className="cart__list"></div>
      </>
    );
  }

  return (
    <>
      <div className="cart__title"> Ваш заказ: </div>
      <div className="cart__list">
        {items.map((itemCart) => {
          const { url, title, price, id, qtty } = itemCart;
          return (
            <div className="cart__item" key={id}>
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__item-qtty">
                <button onClick={() => downQtty(id)} className="cart__item-minus">
                  &ndash;
                </button>
                <span>{qtty}</span>
                <button onClick={() => upQtty(id)} className="cart__item-plus">
                  &#10010;
                </button>
              </div>
              <div onClick={() => deletedFromCart(id)} className="cart__close">
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartTable;
