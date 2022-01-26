import React from 'react';

const AddCar = ({ data, addToCart }) => {
  return (
    <div>
      <button
        className="bg-btn btn-bg d-flex justify-content-center align-items-center  text-white fs-5"
        data-tor="hover:bg(danger)"
        onClick={() => addToCart(data.id)}
      >
        <i className="fas fa-shopping-cart cart mx-2 text-white"></i>
        {'Agregar al carrito'}
      </button>
    </div>
  );
};

export default AddCar;
