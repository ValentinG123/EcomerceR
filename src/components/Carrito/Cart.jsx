import React from 'react';
import './carrito.css';
const Cart = ({ data, delOneFromCart, delAllFromCart, addToCart }) => {
  let { id, img, name, price, quantity, priceoff } = data;
  const styleImg = {
    width: '110px',
    height: '110px',
  };
  const subtotal = price * quantity;
  return (
    <div className="d-flex aling-items-center cart-content">
      <div className="d-flex align-items-center mx-2">
        <img src={img} alt="" style={styleImg} />
      </div>
      <div className="img-cart mx-1">
        <h5 className="ff">{name}</h5>
        <h6 className="text-decoration-line-through fw-lighter">{priceoff}</h6>
        <h5 className="h5 ff">$ {price}.00</h5>
      </div>
      <div className="d-flex justify-content-end w-100 align-items-center mx-3">
        <button
          onClick={() => delOneFromCart(id)}
          className="border-0 btn-bg btn-cart ff h2"
        >
          -
        </button>
        <h6 className="ff h4 mx-3">{quantity}</h6>
        <button
          onClick={() => addToCart(id)}
          className="border-0 btn-bg btn-cart ff h2"
        >
          +
        </button>

        <h5 className="ff h4 mx-3">{subtotal}.00</h5>

        <button
          onClick={() => delAllFromCart(id, true)}
          className="border-0 bg-transparent"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
