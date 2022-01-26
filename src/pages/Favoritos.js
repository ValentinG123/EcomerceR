import React from 'react'
import Favcard from '../components/Cards/Favcard';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToFav,
  clearFav,
  delFromFav,
} from '../actions/shoppingActions';
const Favoritos = () => {
    const state = useSelector((state) => state);
  const { fav } = state.favorito;
  console.log(fav)
  const dispatch = useDispatch();


  const newItems = fav.length === 0 
  ? 
  <p className='text-center h3 ff'>No Tienes Favoritos</p>

  
  :
  fav.map((item, index) => (
    <Favcard
      key={index}
      data={item}
      delOneFromCart={() => dispatch(delFromFav(item.id))}
      delAllFromCart={() => dispatch(delFromFav(item.id, true))}
      addToCart={() => dispatch(addToFav(item.id))}

    />
  )) 

    return (
        <div className=''>
          {newItems}
                
        <div className='d-flex container justify-content-around'>
        <button onClick={() => dispatch(clearFav())} className='btn-bg ff border-0 h4 p-2'>Vaciar Carrito</button>
        </div>        
        </div>
    )
}

export default Favoritos
