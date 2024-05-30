import { ADD_ADDRESS, DELETE_ADDRESS } from "../ActionType";

const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];
    case DELETE_ADDRESS:
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
};

export default AddressReducer; 