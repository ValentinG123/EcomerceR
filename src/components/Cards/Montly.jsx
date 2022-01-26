import Cards from './Cards';
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
    <div className="my-8">
      <h3 className="ff text-start my-6 ">Ofertas Mensuales</h3>
      <div className="container mx-0 card-content row w-100 justify-content-center">
        {newAccesorios.map((product) => (
          <Cards
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
            addToFav={() => dispatch(addToFav(product.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Montly;
