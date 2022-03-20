import React from 'react';
import './buttons.css';
const AddCar = ({ data, addToCart }) => {
  return (
    <div>
      <button
        className="bg-btn btn-add btn-bg d-flex justify-content-center align-items-center  text-white ff"
        data-tor="hover:bg(danger)"
        onClick={() => addToCart(data.id)}
      >
        <i className="fas fa-shopping-cart cart mx-2 text-white cart-add"></i>
        {'Agregar al carrito'}
      </button>
    </div>
  );
};

export default AddCar;
