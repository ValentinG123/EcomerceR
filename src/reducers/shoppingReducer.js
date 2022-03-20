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
        price: 1200,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'
    },
    {
        id: uuid(),
        img:'reloj1.jpg',
        category:'reloj',
        name: 'Singo Ebony',
        off: '25% Off',
        priceoff: '$ 1500.00',
        price: 1125,
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

    },
    {
        id: uuid(),
        img:'2.jpeg',
        category:'reloj',
        name: 'Rakai Ebony',
        off: '15% Off',
        priceoff: '$ 1280.00',
        price: 1088,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

    },
    {
        id: uuid(),
        img:'3.jpeg',
        category:'reloj',
        name: 'Kambas Mini',
        off: '10% Off',
        priceoff: '$ 1280.00',
        price: 1152,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

    },
    {
        id: uuid(),
        category:'accesorios',
        off: '30% Off',
        priceoff: '$ 700.00',
        img:'acc1.jpeg',
        name: 'Mori',
        price: 400,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

},
{
    id: uuid(),
    category:'accesorios',
    off: '10% Off',
    priceoff: '$ 1280.00',
    img:'acc3.jpeg',
    name: 'Sunda',
    price: 1024,
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

},
{
    id: uuid(),
    category:'accesorios',
    off: '10% Off',
priceoff: '$ 1280.00',
img:'acc2.jpeg',
name: 'Tomia Ebony',
price: 750,
descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

},
{
    id: uuid(),
    category:'accesorios',
    off: '10% Off',
priceoff: '$ 1280.00',
img:'acc4.jpeg',
name: 'Billetera Ralex',
price: 1500,
descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

},
{
    id: uuid(),
    category:'gafas',
    off: '10% Off',
    priceoff: '$ 1280.00',
    img:'gafa1.jpeg',
    name: 'Sikka (Ebony & Maple)',
    price: 1750,
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

},
{
id: uuid(),
category:'gafas',
off: '10% Off',
priceoff: '$ 1280.00',
img:'gafa2.jpeg',
name: 'Lore Walnut',
price: 1200,
descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

},
{
id: uuid(),
category:'gafas',
off: '10% Off',
priceoff: '$ 1280.00',
img:'gafa3.jpeg',
name: 'Alor',
price: 1500,
descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ligula sit amet laoreet gravida. Vivamus non purus neque. Vivamus in urna varius, hendrerit mi eget, aliquet enim. Aliquam gravida justo non neque rhoncus sagittis. Praesent porta hendrerit accumsan. Donec.'

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
