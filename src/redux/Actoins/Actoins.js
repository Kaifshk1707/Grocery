import { 
  ADD_ADDRESS,
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  DELETE_ADDRESS,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST } from "../ActionType";

export const addToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
  });
  
  export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index
  });

  export const addToWishlist = data => ({
    type: ADD_TO_WISHLIST,
    payload: data
  });
  
  export const removeFromWishlist = removeFromCart => ({
    type: REMOVE_FROM_WISHLIST,
    payload: removeFromCart
  });

 export const addAddress = (addressData) => ({
  type: ADD_ADDRESS,
  payload: addressData,
 });

 export const deleteAddress = (index) => ({
  type: DELETE_ADDRESS,
  payload: index,
 });

