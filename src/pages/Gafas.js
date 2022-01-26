import React from 'react'
import {addToCart} from '../actions/shoppingActions'
import GafasCards from '../components/Cards/GafasCards'
import { useSelector, useDispatch } from 'react-redux';
const Gafas = () => {
   
      const state = useSelector((state) => state);
      const dispatch = useDispatch();
    
      const { productOff } = state.shopping;
      const newAccesorios = productOff.filter(accesorios => 'gafas' === accesorios.category );
      
     
    return (
      <div className='row d-flex justify-content-center'>
      {
      newAccesorios.map((gafas) => (
         <GafasCards
         key={gafas.id}
         gafas={gafas}
         addToCart={() => dispatch(addToCart(gafas.id))}

         />
      ))
  }
</div>
    )
}

export default Gafas
