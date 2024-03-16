import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "./Actiontypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
