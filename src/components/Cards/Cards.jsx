import React from 'react';
import { Link } from 'react-router-dom';
import AddCar from '../button/AddCar';

const Cards = ({ product, addToCart, addToFav }) => {
  let cardStyle = {
    width: '225px',
    height: '400px',
  };
  let { id, img, name, off, price, priceoff } = product;

  return (
    <>
      <div
        className="card bg-ligth col-3 mx-1 border-0 my-5 card-card"
        key={id}
        style={cardStyle}
      >
        <img
          src={img}
          className="card-img-top w-100 h-50 position-relative top-10"
          alt="..."
        />
        <Link to={`/product/${id}`} className="text-black text-decoration-none">
          <div className="card-body d-flex flex-column justify-content-center ">
            <h5 className="card-title h5">{name}</h5>
            <h6 className="fw-lighter">{off}</h6>
            <h6 className="text-decoration-line-through fw-lighter">
              {priceoff}
            </h6>
            <h5 className="h5">{price}.00</h5>
          </div>
        </Link>
        <div className="add-cart">
          <AddCar addToCart={addToCart} data={product} addToFav={addToFav} />
        </div>
      </div>
    </>
  );
};

export default Cards;
