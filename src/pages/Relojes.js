import React from 'react'
import {addToCart} from '../actions/shoppingActions'
import Cards from '../components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux';
const Gafas = () => {
   
      const state = useSelector((state) => state);
      const dispatch = useDispatch();
    
      const { productOff } = state.shopping;
      const newAccesorios = productOff.filter(accesorios => 'reloj' === accesorios.category );
      
     
    return (
      <div className='row d-flex justify-content-center'>
      {
      newAccesorios.map((product) => (
         <Cards
         key={product.id}
         product={product}
         addToCart={() => dispatch(addToCart(product.id))}

         />
      ))
  }
</div>
    )
}

export default Gafas