import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({ menuItem, addedToCart }) => {
  console.log(addedToCart);
  let icon_url = '';
  const { title, price, url, category } = menuItem;

  if (category === 'pizza') {
    icon_url = 'https://im0-tub-ru.yandex.net/i?id=949edbe001119bbe543737ca99711e63&n=13';
  } else if (category === 'salads') {
    icon_url = 'http://getdrawings.com/free-icon-bw/salad-icon-6.png';
  } else if (category === 'meat') {
    icon_url = 'https://cdn.onlinewebfonts.com/svg/img_479311.png';
  }

  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
        <div className="category__icon">
          <img src={icon_url} alt={category}></img>
        </div>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button onClick={() => addedToCart()} className="menu__btn">
        Add to cart
      </button>
    </li>
  );
};

export default MenuListItem;
