import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART} from "../types";
import uuid from '../../node_modules/uuid/dist/v4'

export const initialState = {
    productOff : [
        {
        id: uuid(),
        img:'5.jpg',
        category:'reloj',
        name: 'Singo Maple',
        off: '20% Off',
        priceoff: '$ 1500.00',
        price: 1264
    },
    {
        id: uuid(),
        img:'reloj1.jpg',
        category:'reloj',
        name: 'Singo Ebony',
        off: '25% Off',
        priceoff: '$ 1500.00',
        price: 1264
    },
    {
        id: uuid(),
        img:'2.jpeg',
        category:'reloj',
        name: 'Rakai Ebony',
        off: '15% Off',
        priceoff: '$ 1280.00',
        price: 1118
    },
    {
        id: uuid(),
        img:'3.jpeg',
        category:'reloj',
        name: 'Kambas Mini',
        off: '10% Off',
        priceoff: '$ 1280.00',
        price: 1024
    },
    {
        id: uuid(),
        category:'accesorios',
        off: '10% Off',
        priceoff: '$ 1280.00',
        img:'acc1.jpeg',
        name: 'Pañuelos Tela',
        price: 400,
},
{
    id: uuid(),
    category:'accesorios',
    off: '10% Off',
    priceoff: '$ 1280.00',
    img:'acc3.jpeg',
    name: 'Billetera Bulk',
    price: 1760,
},
{
    id: uuid(),
    category:'accesorios',
    off: '10% Off',
priceoff: '$ 1280.00',
img:'acc2.jpeg',
name: 'Golden Love',
price: 750,
},
{
    id: uuid(),
    category:'accesorios',
    off: '10% Off',
priceoff: '$ 1280.00',
img:'acc4.jpeg',
name: 'Billetera Ralex',
price: 1500,
},
{
    id: uuid(),
    category:'gafas',
    img:'gafa1.jpeg',
    name: 'Sunset Chiffon',
    price: 1750,
},
{
id: uuid(),
category:'gafas',
img:'gafa2.jpeg',
name: 'Template Glass',
price: 1200,
},
{
id: uuid(),
category:'gafas',
img:'gafa3.jpeg',
name: 'Julio Sherpon',
price: 1500,
}
],
cart:[],
};

export function shoppingReducer(state = initialState,action){
    
    switch (action.type){
        case ADD_TO_CART:
        {
            let newItem = state.productOff.find(product => product.id === action.payload)
            
            let iteminCart = state.cart.find(item => item.id === newItem.id)

            return iteminCart
            ? {
                ...state,
                cart:state.cart.map(item=> item.id === newItem.id ? {...item, quantity:item.quantity + 1 } : item)

            }  
            : {  ...state,
                cart:[...state.cart, {...newItem,quantity:1}]}
        

        }
        
        case REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1 
            ? {
                ...state,
                cart:state.cart.map(item => 
                    item.id === action.payload
                     ? {...item, quantity: item.quantity-1} : item)
            } 
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
          case CLEAR_CART:
            return initialState;
        
        default: 
            return state;
    }
    
}
