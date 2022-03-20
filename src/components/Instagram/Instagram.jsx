import React from 'react';
import dataProduct from '../../Data';
const Instagram = () => {
  let imgStyle = {
    width: '150px',
    height: '150px',
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="ff my-5 ml-100">Instagram</h3>
        <div className="row mx-100 justify-content-center">
          {dataProduct.instagram.map((ig) => (
            <div className="m-3 instagram-img" key={ig.id}>
              <img src={ig.img} alt="" style={imgStyle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instagram;
