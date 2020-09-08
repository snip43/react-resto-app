const initialState = {
  loading: false,
  error: false,
  totalPrice: 0,
  menu: [],
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
        totalPrice: state.totalPrice,
      };

    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false,
      };

    case 'MENU_ERROR':
      return {
        ...state,
        menu: state.menu,
        error: true,
      };

    case 'ADD_TO_CART':
      const id = action.payload;
      const itemInd = state.items.findIndex((item) => item.id === id);

      if (itemInd >= 0) {
        const itemInState = state.items.find((item) => item.id === id);
        const newItem = {
          ...itemInState,
          qtty: ++itemInState.qtty,
        };
        return {
          ...state,
          items: [...state.items.slice(0, itemInd), newItem, ...state.items.slice(itemInd + 1)],
          totalPrice: state.totalPrice + newItem.price,
        };
      }

      // товара раньше не было в корзине
      const item = state.menu.find((item) => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        qtty: 1,
      };

      return {
        ...state,
        items: [...state.items, newItem],
        totalPrice: state.totalPrice + newItem.price,
      };

    case 'DELETE_FROM_CART':
      const delItemIndex = state.items.findIndex((item) => item.id === action.payload);
      const elem = state.items.find((item) => item.id === action.payload);

      const price = elem.price * elem.qtty;

      return {
        ...state,
        items: [...state.items.slice(0, delItemIndex), ...state.items.slice(delItemIndex + 1)],
        totalPrice: state.totalPrice - price,
      };

    case 'UP_QTTY':
      const itemUp = state.items.find((item) => item.id === action.payload);
      const priceUp = itemUp.price * itemUp.qtty;

      return {
        ...state,
        qtty: ++itemUp.qtty,
        totalPrice: (state.totalPrice += priceUp),
      };

    case 'DOWN_QTTY':
      const itemDwn = state.items.find((item) => item.id === action.payload);
      const priceDwn = itemDwn.price * itemDwn.qtty;

      if (itemDwn.qtty === 0) {
        const delItemIndex = state.items.findIndex((item) => item.id === action.payload);
        // const priceDwn = itemDwn.price * itemDwn.qtty;
        return {
          ...state,
          items: [...state.items.slice(0, delItemIndex), ...state.items.slice(delItemIndex + 1)],
          totalPrice: (state.totalPrice -= priceDwn),
        };
      }

      return {
        ...state,
        qtty: --itemDwn.qtty,
        totalPrice: state.totalPrice - priceDwn,
      };

    default:
      return state;
  }
};

export default reducer;
