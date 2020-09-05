const initialState = {
  menu: [],
  items: [
    {
      title: 'Cesar salad',
      price: 12,
      url:
        'https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg',
      category: 'salads',
      qtty: 1,
      id: 1,
    },
  ],
  loading: false,
  error: false,
  totalPrice: 0,
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
      const item = state.menu.find((item) => item.id === id);

      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
      };
      return {
        ...state,
        items: [...state.items, newItem],
        qtty: state.qtty,
        totalPrice: (state.totalPrice += item.price),
      };

    case 'DELETE_FROM_CART':
      const delItemIndex = state.items.findIndex((item) => item.id === action.payload);
      const elem = state.items.find((item) => item.id === action.payload);

      return {
        ...state,
        items: [...state.items.slice(0, delItemIndex), ...state.items.slice(delItemIndex + 1)],
        totalPrice: (state.totalPrice -= elem.price),
      };

    case 'UP_QTTY':
      const itemUp = state.items.find((item) => item.id === action.payload);
      const priceSelfUp = itemUp.qtty * itemUp.price;
      return {
        ...state,
        qtty: itemUp.qtty++,
        totalPrice: itemUp.qtty + priceSelfUp,
      };

    case 'DOWN_QTTY':
      const itemDwn = state.items.find((item) => item.id === action.payload);
      // const itemInd = state.items.findIndex((item) => item.id === action.payload);
      const priceSelf = itemDwn.qtty * itemDwn.price;

      return {
        ...state,
        qtty: itemDwn.qtty--,
        totalPrice: state.totalPrice - priceSelf,
      };

    default:
      return state;
  }
};

export default reducer;
