import Auth from './Auth'
import Config from './Config'
import { combineReducers } from 'redux'
import Cart from './Cart';

export default combineReducers({
    Auth: Auth,
    Config: Config,
    Cart:Cart
});
