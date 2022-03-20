import React from 'react';
import { useNavigate } from 'react-router-dom';
import enviarEnlaceLogin from '../functions/sendLogin'
const Login = () => {
 
   const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const correo = e.target.formCorreo.value
    enviarEnlaceLogin(correo)
    window.localStorage.setItem("correo", correo)
    navigate('/success')
  }
  return (

    <section className="vh-100">
      <div className="container py-1">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card card-login">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid img-login"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3"></i>
                      <span className="h1 fw-bold mb-0">Rolex</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3">
                      Sign into your account
                    </h5>
                    <form onSubmit={handleSubmit}>
                      <input
                        type='email' 
                        autoComplete="on"
                        placeholder="Email"
                        id='formCorreo'
                        className="form-control form-control-lg my-3"
                      />

    
                      <button className="btn btn-dark btn-lg btn-block" type='submit'>
                        Iniciar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    // <button onClick={SingInWithFirebase}>Inciar con gogle</button>

  );
};

export default Login;
