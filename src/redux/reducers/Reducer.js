// src/redux/reducers/Reducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from '../ActionType';


const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:

      return state.filter((item, index) => index !== action.payload);
      
    default:
      return state;
  }
};

export default Reducer;
