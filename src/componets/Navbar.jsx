import { Link, useNavigate } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi";
import './nav.css';
import { useSelector } from 'react-redux';

export default function Navbars() {
const items =useSelector(state=>state.cart.cart)

const navigate=useNavigate();
  return (
    <nav className="menu" id="nav">
      <span className="nav-item active">
        <span className="icon">
          <i data-feather="home"></i>
        </span>
        <Link to="/">Home</Link>
      </span>
      <span className="nav-item">
        <span className="icon">
          <i data-feather="search"></i>
        </span>
        <Link>Search</Link>
      </span>
      <span className="nav-item">
        <span className="icon"> 
          <i data-feather="bell"></i>
        </span>
        <Link>Notifications</Link>
      </span>
      <span className="nav-item" onClick={()=>navigate('/cart')}>
        <span className="icon">
          <span className="subicon">{items.length}</span>
          <HiShoppingCart/>
        </span>
        <Link to="/cart">Cart</Link>
      </span>
    </nav>
  );
}
