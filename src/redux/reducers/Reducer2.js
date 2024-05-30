// src/redux/reducers/Reducers2.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionType";

const Reducer2 = (state = [], actions) => {
    switch (actions.type) {
        case ADD_TO_WISHLIST:
            return [...state, actions.payload];
        case REMOVE_FROM_WISHLIST:
            const deleteArray = state.filter((item, index) => {
                return index !== actions.payload;
            })
            return deleteArray;
        default:
            return state;
    };
}
export default Reducer2;
