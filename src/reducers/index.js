import {combineReducers} from 'redux'
import { favoritoReducer } from './favoritoReducer';
import {shoppingReducer} from './shoppingReducer'
const reducer = combineReducers({
  shopping: shoppingReducer,
  favorito: favoritoReducer,  
});

export default reducer;