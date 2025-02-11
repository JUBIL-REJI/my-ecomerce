import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "./redux/CartSlice";
import { Button } from "react-bootstrap";
import './cart.css';
import Navbars from "./componets/Navbar";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <>
    <Navbars/>
    <div className="container-fluid">
      <div className="row">
        <aside className="col-lg-9">
          <div className="card">
            <div className="table-responsive">
              {cart.length === 0 ? (
                <h1>Cart is empty</h1>
              ) : (
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">Quantity</th>
                      <th scope="col" width="120">Price</th>
                      <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <figure className="itemside align-items-center">
                            <div className="aside">
                              <img
                                src={item.image || "https://i.imgur.com/1eq5kmC.png"}
                                className="img-sm"
                                alt={item.name}
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title text-dark" data-abc="true">
                                {item.name}
                              </a>
                              <p className="text-muted small">SIZE: L <br /> Brand: MAXTRA</p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          {/* Uncomment and implement `updateCartQty` if needed */}
                          {/* <select 
                              className="form-control" 
                              value={item.qty} 
                              onChange={(e) => dispatch(updateCartQty({ id: item.id, qty: Number(e.target.value) }))}
                            >
                              {[1, 2, 3, 4].map((num) => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select> */}
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">₹{item.price * item.qty}</var>
                            <small className="text-muted"> ₹{item.price} each </small>
                          </div>
                        </td>
                        <td className="text-right d-none d-md-block">
                          <Button variant="light" className="mr-2">
                            <i className="fa fa-heart"></i>
                          </Button>
                          <Button variant="danger" onClick={() => dispatch(deleteFromCart(item))}>
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </>
    
  );
}
