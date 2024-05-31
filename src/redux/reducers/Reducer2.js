// src/redux/reducers/Reducers2.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionType";

const Reducer2 = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];
        //end{code}
        case REMOVE_FROM_WISHLIST:
            const deleteArray2 = state.filter((item, index) => {
                return index !== action.payload;
            })
            return deleteArray2;
        default:
            return state;
    };
}
export default Reducer2;
