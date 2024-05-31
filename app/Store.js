import { createStore, combineReducers } from 'redux';
import Reducer from '../src/redux/reducers/Reducer';
import Reducer2 from '../src/redux/reducers/Reducer2';
import AddressReducer from '../src/redux/reducers/AddressReducer';

const routeReducer = combineReducers({ Reducer, Reducer2, AddressReducer });

const store = createStore(routeReducer);

export default store;
// , Reducer2, AddressReducer