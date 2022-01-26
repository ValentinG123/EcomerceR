import React from 'react'
import {addToCart} from '../actions/shoppingActions'
import RelojCards from '../components/Cards/RelojCards'
import { useSelector, useDispatch } from 'react-redux';
const Gafas = () => {
   
      const state = useSelector((state) => state);
      const dispatch = useDispatch();
    
      const { productOff } = state.shopping;
      const newAccesorios = productOff.filter(accesorios => 'reloj' === accesorios.category );
      
     
    return (
      <div className='row d-flex justify-content-center'>
      {
      newAccesorios.map((reloj) => (
         <RelojCards
         key={reloj.id}
         reloj={reloj}
         addToCart={() => dispatch(addToCart(reloj.id))}

         />
      ))
  }
</div>
    )
}

export default Gafas