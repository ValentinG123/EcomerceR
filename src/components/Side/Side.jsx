import React from 'react';
const Side = () => {
  let imgStyle = {
    width: '60%',
  };
  return (
    <>
      <div className="container my-5">
        <h4 className="ff">Noticias Recientes</h4>
      </div>
      <div className="container d-flex p-0 side-content">
        <div className="container w-50 d-flex flex-column justify-content-center align-items-center">
          <p className="ff h5 text-s">Where to travel?</p>
          <h5 className="ff h2 text-side">Matoa Where To Travel?</h5>
        </div>
        <div className="container side-container bg">
          <img src="12.jpg" className="img-side" alt="" />
        </div>
      </div>
    </>
  );
};

export default Side;
