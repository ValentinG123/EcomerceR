/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useUser from '../../hooks/useUser';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    return false;
  };

  const { isLogged, logout } = useUser();
  const state = useSelector((state) => state);
  const { cart } = state.shopping;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container mx-100">
        <Link className="navbar-brand text-uppercase logo h1" to="/">
          Rolex
        </Link>
        <button
          onClick={handleClick}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <ul className="navbar-nav justify-self-start f-bg">
            <li className="nav-item mx-4">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/relojes">
                Relojes
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/gafas">
                Gafas
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/accesorios">
                Accesorios
              </Link>
            </li>
          </ul>
          <div>
            {isLogged ? (
              <Link
                to="/"
                className=" cart text-decoration-none ff f-bg"
                onClick={() => logout()}
              >
                <i className="fas fa-sign-out-alt px-3 f-bg"></i>
                Salir
              </Link>
            ) : (
              <Link to="/login" className=" cart ff f-bg text-decoration-none">
                <i className="fas fa-user-alt px-3 f-bg"></i>
                Iniciar
              </Link>
            )}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Link
            className="cart-button rounded-circle border-0 position-relative mx-1"
            to="/carro"
          >
            {cart.length === 0 ? null : (
              <span className=" badge btn-bg rounded-pill position-absolute top-0 start-100">
                {' '}
                {cart.length}
              </span>
            )}
            <i className="fas fa-shopping-cart cart mx-3"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
