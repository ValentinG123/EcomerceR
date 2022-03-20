import React from 'react'
import {addToCart} from '../actions/shoppingActions'
import Cards from '../components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux';
const Accesorios = () => {
    
  const state = useSelector((state) => state);
  const { productOff } = state.shopping;

  const dispatch = useDispatch();

  const newAccesorios = productOff.filter(accesorios => 'accesorios' === accesorios.category );

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

export default Accesorios
