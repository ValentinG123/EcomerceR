import React from 'react';
import './footer.css';
import { useUserContext } from '../../context/userContext';

const Footer = () => {
  const { usuario } = useUserContext();

  return (
    <div className="footer-basic mt-5">
      <footer>
        <div className="social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Inicio</a>
          </li>
          <li className="list-inline-item">
            <a href="/relojes">Relojes</a>
          </li>
          <li className="list-inline-item">
            <a href="/gafas">Gafas</a>
          </li>
          <li className="list-inline-item">
            <a href="/accesorios">Accesorios</a>
          </li>
          <li className="list-inline-item">
            {usuario ? <a href="/">Logout</a> : <a href="/login">Login</a>}
          </li>
        </ul>
        <p className="copyright">Valentin Graglia © 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
