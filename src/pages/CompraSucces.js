import React, {useContext, useState,} from 'react'
import Context from '../context/userContext'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function CompraSucces() {
    // Volver al inicio
    const navigate = useNavigate();
    // Extraer datos del carrito
    const {cart} = useContext(Context)
    // Sumar Total
    let total = 0

    cart.forEach((item) => {
        total = total + (item.price * item.quantity)

    });  
    // Formulario
    const [formulario,setFormulario] = useState({
        numerodetarjeta:'',
        nombredetarjeta:'',
        expiracion:'',
        direccion:'',
        estado:'',
        cvv:'',
        codigo:'',
        ciudad:''
    })

    const handleChange = e => {
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })

    }
    const {numerodetarjeta,nombredetarjeta,estado,expiracion,codigo,cvv,direccion,ciudad} = formulario
    // Error
    const [error,setError] = useState()
    const handleClick = e => {
        e.preventDefault();
        // Validar
        if(nombredetarjeta.trim() === '' || numerodetarjeta.trim() === '' || 
        expiracion.trim() === '' || cvv.trim() === '' ||
        direccion.trim() === '' || 
        ciudad.trim() === '' || estado.trim() === '' ||
        codigo.trim() === ''){
            setError(true)
        return;
    }
        //Confirmar
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Compruebe que sus datos sean correctos",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Pagar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Compra Realizada con Exito!',
                'Tu pedido llegara en el tiempo estimado!',
                'success'
              )
                navigate('/')
            }
          })
        }
    
    return (
        <div className="container mt-2 px-5">
        <div className="mb-4">
            <h2>Confirmar Orden y Pagar</h2>
        </div>
        { error ? <p className='alert alert-danger'>Todos los campos son obligatorios</p> : null}
        <div className="row">
            <div className="col-md-8">
                <div className="card p-3">
                    <h6 className="text-uppercase">Detalles de Pago</h6>
                    <div className="inputbox mt-2"> 
                    <input type="text" name="nombredetarjeta" onChange={handleChange} value={nombredetarjeta} className="form-control" required="required"/> <span>Nombre de Tarjeta</span> </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="inputbox mt-2 mr-2"> <input type="text" onChange={handleChange} name="numerodetarjeta" value={numerodetarjeta} className="form-control" required="required" pattern={[0-9]} /> <i className="fa fa-credit-card"></i> <span>Numero de Tarjeta</span> </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-row">
                                <div className="inputbox mt-2 mr-2"> <input type="date" onChange={handleChange} name="expiracion" value={expiracion} className="form-control" required="required"/> <span>Expiracion</span> </div>
                                <div className="inputbox mt-2 mr-2"> <input type="text" onChange={handleChange} name="cvv" value={cvv} className="form-control" required="required" minlength="3" maxlength="3"/> <span>CVV</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 mb-3">
                        <h6 className="text-uppercase">Billing Address</h6>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <div className="inputbox mt-2 mr-2"> <input type="text" onChange={handleChange} name="direccion" value={direccion} className="form-control" required="required"/> <span>Direccion</span> </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inputbox mt-2 mr-2"> <input type="text" onChange={handleChange} name="ciudad" value={ciudad} className="form-control" required="required"/> <span>Ciudad</span> </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-md-6">
                                <div className="inputbox mt-3 mr-2"> <input type="text" onChange={handleChange} name="estado" value={estado} className="form-control" required="required"/> <span>Estado/Provincia</span> </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inputbox mt-3 mr-2"> <input type="text" onChange={handleChange} name="codigo" value={codigo} className="form-control" required="required"/> <span>Codigo Postal</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-4 d-flex justify-content-between"> <button onClick={() => window.history.back(-1)} className='bg-transparent border-0'>Paso Anterior</button> <button className="btn btn-success px-3" onClick={handleClick}>Pagar $ {total}</button> </div>
            </div>
   
        </div>
    </div>
    )
}


