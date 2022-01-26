import React from 'react';
import AddCar from '../button/AddCar';
const Main = () => {
  return (
    <div className=" container mx-auto my-6 d-flex content-main">
      <div className="w-25 position-relative ">
        <div className="position-absolute img-content ">
          <img src="relojinicio.png" alt="" className="logo-inicio" />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-around w-75">
        <h1 className="ff title">WAY KAMBAS MINI EBONY</h1>
        <div className="w-75">
          <p className="ff infoff">
            MATOA Way Kambas - This wood is chosen to represent the Sumatran
            Rhino's skin which is designed with an overlap effect on its strap
            to represent Rhino's skin.
          </p>
        </div>

        <AddCar />
      </div>
    </div>
  );
};

export default Main;
