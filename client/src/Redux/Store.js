import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import productsReducer from "./ProductReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const persistedCartState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const store = createStore(rootReducer, { cart: { cart: persistedCartState } });

store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem("cart", JSON.stringify(cart.cart));
});

export default store;
