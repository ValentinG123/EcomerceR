import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import AddCar from '../components/button/AddCar'
import { addToCart } from '../actions/shoppingActions';

const SelectProduct = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { productOff } = state.shopping;
    const proid = useParams();
    const proDetail = productOff.filter(x => x.id === proid.id)
    const product = proDetail[0];
    console.log(product)

    return (
     <>
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-6'>
            <img src={`/${product.img}`} alt={product.img} />
            </div>
            <div className='col-md-6'>
                <h1 className='ff'>{product.name}</h1>
                <hr />
                <h2 className='ff'>{product.priceoff}</h2>
                <p className='ff text-decoration-line-through fw-lighter'>{product.off}</p>
                <h2 className='ff'>$ {product.price}.00</h2>
                <AddCar className='my-5' data={product}
                      addToCart={() => dispatch(addToCart(product.id))}

                />
            </div>
        </div>
    </div>
     </>
    )
}

export default SelectProduct
