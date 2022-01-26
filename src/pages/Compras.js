import React from 'react'
import Swal from "sweetalert2";
import Cart from '../components/Carrito/Cart';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  clearCart,
  delFromCart,
} from '../actions/shoppingActions';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
const Compras = () => {
  const state = useSelector((state) => state);
  
  const { cart } = state.shopping;
  
  const dispatch = useDispatch();

  // Total
  let total = 0

  cart.forEach((item) => {
      total = total + (item.price * item.quantity)

  }); 
  // Login
  const { isLogged} = useUser();

  const navigate = useNavigate();

  const eliminar = () => dispatch(clearCart());

  const CarroVacio = () => {
    Swal.fire({
      icon: 'error',
      title: 'Su Carro esta Vacio!',
      text: 'No es posible seguir sin articulos',
    })
  }
  const handleClick = () => {
    if (!isLogged) return navigate('/login');

    
    else {
      cart.length === 0 ? CarroVacio() :
      navigate('/carro/comprasucces');
      // eliminar()
    }

  };
  const newItems = cart.length === 0 
  ? 
  <p className='text-center h3 ff'>No hay productos</p>

  
  :
  cart.map((item, index) => (
    <Cart
      key={index}
      data={item}
      delOneFromCart={() => dispatch(delFromCart(item.id))}
      delAllFromCart={() => dispatch(delFromCart(item.id, true))}
      addToCart={() => dispatch(addToCart(item.id))}

    />
  )) 





    return (
        <div className=''>
          {newItems}
                
        <div className='d-flex container justify-content-around'>
        <button onClick={eliminar} className='btn-bg ff border-0 h4 p-2'>Vaciar Carrito</button>
        <h5>Total=$ {total}.00</h5>
        </div>
          <button className='btn-bg border-0 w-100 ff h3 p-3' onClick={handleClick}>Checkout</button>
        
        </div>
    )
}

export default Compras
