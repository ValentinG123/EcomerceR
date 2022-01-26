// import {REMOVE_ALL_FROM_FAV,REMOVE_ONE_FROM_FAV,CLEAR_FAV,ADD_TO_FAV} from "../types";
// import { initialState } from "./shoppingReducer";
// export function favoritoReducer (state = initialState,action){
//     switch (action.type){
//         case ADD_TO_FAV:{
//             let itemFav = state.productOff.find(product => product.id === action.payload)

//             let iteminFav = state.fav.find(item => item.id === itemFav.id)

//             return iteminFav
//             ? {
//                 ...state,
//                 fav:state.fav.map(item=> item.id === itemFav.id ? {...item, quantity:item.quantity + 1 } : item)

//             }  
//             : {  ...state,
//                 fav:[...state.fav, {...itemFav,quantity:1}]}
        

//         }
        
//         case REMOVE_ONE_FROM_FAV:{
//             let favToDelete = state.fav.find(item => item.id === action.payload)

//             return favToDelete.quantity > 1 
//             ? {
//                 ...state,
//                 fav:state.fav.map(item => 
//                     item.id === action.payload
//                      ? {...item, quantity: item.quantity-1} : item)
//             } 
//             : {
//                 ...state,
//                 fav: state.fav.filter(item => item.id !== action.payload)
//             }
//         }
//         case REMOVE_ALL_FROM_FAV:{
//             return {
//                 ...state,
//                 fav: state.carfavt.filter(item => item.id !== action.payload)
//             }
//         }
//           case CLEAR_FAV:
//             return initialState;
        
//         default: 
//             return state;
//     }
// }