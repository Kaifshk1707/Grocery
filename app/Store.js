import { createStore, combineReducers } from 'redux';
import Reducer from '../src/redux/reducers/Reducer';
import Reducer2 from '../src/redux/reducers/Reducer2';
import AddressReducer from '../src/redux/reducers/AddressReducer';

const rootReducer = combineReducers({
  cart: Reducer,
  wishlist: Reducer2,
  addresses: AddressReducer,
});

const store = createStore(rootReducer);

export default store;
