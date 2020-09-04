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
const deletedFromCart = () => {
  return {
    type: 'DELETE_FROM_CART',
  };
};

export { menuLoaded, menuRequseted, menuError, addedToCart, deletedFromCart };
