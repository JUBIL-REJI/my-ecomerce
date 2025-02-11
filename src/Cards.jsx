import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/CartSlice';


export default function Cards({image, name,categorey,price,id}) {

  const dispatch=useDispatch();

  const handleAddToCart=(products)=>{

   dispatch(addToCart(products));
  }
  const cart = useSelector((state) => state.cart.cart);


  const addedIncart = cart.some((item) => item.id === id);

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} className='h-44 flex items-center justify-center'/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{categorey}</Card.Text>
      <Card.Text> <strong>Price:</strong> ₹{price}</Card.Text>
      <Button variant="primary" onClick={()=>handleAddToCart({image,name,price,id})}>{addedIncart ?'added to cart':'add to cart'}</Button>
    </Card.Body>
  </Card>
  )
}


Cards.propTypes = {
  name: PropTypes.string.isRequired,
  categorey: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired

};
