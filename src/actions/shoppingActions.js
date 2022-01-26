import {ADD_TO_FAV, REMOVE_ALL_FROM_FAV, REMOVE_ONE_FROM_FAV, CLEAR_FAV,ADD_TO_CART,REMOVE_ALL_FROM_CART,REMOVE_ONE_FROM_CART,CLEAR_CART} from '../types/index'

  export const addToFav = (id) => ({ type: ADD_TO_FAV, payload: id });

  export const delFromFav = (id, all = false) => 
   all 
    ?{ type:REMOVE_ALL_FROM_FAV,payload: id }
     
    : {type:REMOVE_ONE_FROM_FAV,payload: id }
    
 
  export const clearFav = () => ({type:CLEAR_FAV})

  export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

  export const delFromCart = (id, all = false) => 
   all 
    ?{ type:REMOVE_ALL_FROM_CART,payload: id }
     
    : {type:REMOVE_ONE_FROM_CART,payload: id }
    
 
  export const clearCart = () => ({type:CLEAR_CART})
  