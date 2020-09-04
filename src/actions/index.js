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

export { menuLoaded, menuRequseted, menuError };
