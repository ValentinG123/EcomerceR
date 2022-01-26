import React from 'react';
import dataProduct from '../../Data';
const Products = () => {
  return (
    <>
      <div className="container d-flex my-5 products">
        <h5 className="ff">Mapple Series</h5>
      </div>
      <div className=" m-0 row w-100 container-fluid d-flex justify-content-center align-items-center">
        {dataProduct.products.map((product) => (
          <div
            key={product.id}
            className="col-4 d-flex mb-3 justify-content-center align-items-center"
          >
            <div className="img-box bg justify-content-center align-items-center d-flex">
              <img src="reloj1.jpg" className="img-product" alt="" />
            </div>
            <div className="container">
              <h5 className="ff">{product.name}</h5>
              <p className="ff">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
