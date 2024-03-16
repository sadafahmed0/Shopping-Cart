// Actions.js
import {
  ADD_TO_CART,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "./Actiontypes";

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
