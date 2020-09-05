const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu,
  };
};
const menuRequseted = () => {
  return {
    type: 'MENU_REQUESTED',
  };
};
const menuError = () => {
  return {
    type: 'MENU_ERROR',
  };
};

const addedToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    payload: id,
  };
};

const deletedFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: id,
  };
};

const upQtty = (id) => {
  return {
    type: 'UP_QTTY',
    payload: id,
  };
};
const downQtty = (id) => {
  return {
    type: 'DOWN_QTTY',
    payload: id,
  };
};

export { menuLoaded, menuRequseted, menuError, addedToCart, deletedFromCart, upQtty, downQtty };
