import React from 'react'
import {addToCart} from '../actions/shoppingActions'
import AccCards from '../components/Cards/AccCards'
import { useSelector, useDispatch } from 'react-redux';
const Accesorios = () => {
    
  const state = useSelector((state) => state);
  const { productOff } = state.shopping;

  const dispatch = useDispatch();

  const newAccesorios = productOff.filter(accesorios => 'accesorios' === accesorios.category );
  

    return (
        <div className='row d-flex justify-content-center'>
                {
                newAccesorios.map((acc) => (
                   <AccCards
                   key={acc.id}
                   acc={acc}
                   addToCart={() => dispatch(addToCart(acc.id))}

                   />
                ))
            }
        </div>
    )
}

export default Accesorios
