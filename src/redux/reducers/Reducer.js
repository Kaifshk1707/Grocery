// src/redux/reducers/Reducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from '../ActionType';


const Reducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_TO_CART:
      return [...state, actions.payload];
    case REMOVE_FROM_CART:
      const deleteArray = state.filter((item, index) => {
        return index !== actions.payload;
      })
    default:
      return state;
  }
};

export default Reducer;
