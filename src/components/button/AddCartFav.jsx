import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const AddCartFav = ({ addToCart, data, addToFav }) => {
  const navigate = useNavigate();
  const [favorito, setFav] = useState(true);
  const { isLogged, fav } = useUser();
  const handleClick = () => {
    if (!isLogged) return navigate('/login');
    addToFav(data.id);
    setFav(false);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="border-0 bg-transparent" onClick={handleClick}>
        <i
          className={
            favorito
              ? 'far fa-heart fs-2 bg-ligth'
              : 'fas fa-heart heart-bg fs-2 bg-ligth'
          }
        ></i>
      </button>
      <button
        className="btn-bg d-flex justify-content-center align-items-center  text-white fs-8 border-0 mx-2"
        onClick={() => addToCart(data.id)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default AddCartFav;
