const initialState = {
  menu: [],
  items: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'MENU_ERROR':
      return {
        ...state,
        error: true,
      };

    case 'ADD_TO_CART':
      const item = state.menu.find((item) => item.id === action.payload);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
      };
      return {
        ...state,
        items: [...state, newItem],
      };

    case 'DELETE_FROM_CART':
      const delItemIndex = state.items.findIndex((item) => item.id === action.payload);
      return {
        ...state,
        items: [...state, state.items.slice(0, delItemIndex), state.items.slice(delItemIndex + 1)],
      };
    default:
      return state;
  }
};

export default reducer;
