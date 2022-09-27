import { createStore, combineReducers,applyMiddleware } from 'redux';
import userReducer from '../reducers/userReducer';
import thunk from 'redux-thunk'
const rootReducer = combineReducers(
{ cart: userReducer }
);
const Store = () => {
return createStore(userReducer,applyMiddleware(thunk));
}
export default Store;