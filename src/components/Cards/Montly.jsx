import Cards from './Cards';
import './cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToFav } from '../../actions/shoppingActions';
const Montly = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { productOff } = state.shopping;
  const newAccesorios = productOff.filter(
    (accesorios) => 'reloj' === accesorios.category
  );

  return (
    <div className="w-100 card-content">
      <h3 className="ff text-start my-6 ml-100">Ofertas Mensuales</h3>
      <div className="container mx-0  row w-100 justify-content-center">
        {newAccesorios.map((product) => (
          <Cards
            key={product.id}
            product={product}
            addToCart={() => dispatch(addToCart(product.id))}
            addToFav={() => dispatch(addToFav(product.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Montly;
