// ProductReducer.js
import { FETCH_PRODUCTS_SUCCESS } from "./Actiontypes";

const initialState = {
  items: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
