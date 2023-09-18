import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masterlayout from "../layouts/Masterlayout";
import { SET_CART } from "../redux/action";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import Swal from "sweetalert2";
import CustomerModel from "../models/CustomerModel";

function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const image = "http://127.0.0.1:8000/";

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    setCartTotal(total);
  }, [cart]);

  const handleQuantityChange = (e) => {
    const id = e.target.id;
    const qty = e.target.value;
    const newCart = [...cart];
    if (newCart[id]) {
      newCart[id].quantity = qty;
      localStorage.setItem("cart", JSON.stringify(newCart));
      dispatch({
        type: SET_CART,
        payload: newCart,
      });
    }
  };
  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch({
      type: SET_CART,
      payload: newCart,
    });
    setIsRemoving(true);
    alert("Are you sure ?");
   
  };

  const handleCheckout = () => {
    let customer = CustomerModel.getCookie("customer");
    customer = customer ? JSON.parse(customer) : "";

    if (!customer) {
      alert("Bạn cần đăng nhập để thanh toán đơn hàng của bạn !");
      navigate("/login");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({ type: SET_CART, payload: cart });
      navigate("/checkout");
    }
  };

  return <Masterlayout>
    <>  
  <div className="page-title parallax parallax1 ">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-title-content text-center">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li className="blog">
                  <a href="#">Shopping Cart</a>
                </li>
              </ul>
            </div>
            <div className="page-title-heading">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* /.page-title */}
  <div className="main-shop-cart">
    <section className="flat-cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="woocommerce-tabs wc-tabs-wrapper">
              <ul className="tabs">
                <li>
                  <a className="tab active" data-id="#tab-description" href="#">
                    <i
                      className="fas fa-shopping-cart icon_bag"
                      aria-hidden="true"
                    />
                    SHOPPING CART
                  </a>
                </li>
                <li>
                  <a className="tab" data-id="#tab-reviews" href="#">
                    <i
                      className="fas fa-check-circle icon_ribbon"
                      aria-hidden="true"
                    />
                    CHECK OUT
                  </a>
                </li>
                <li>
                  <a className="tab" data-id="#tab-order" href="#">
                    <i
                      className="fas fa-arrow-down arrow_carrot-down_alt"
                      aria-hidden="true"
                    />
                    ORDER COMPLETE
                  </a>
                </li>
              </ul>
              <div className="cart-wrap">
                <div id="tab-description" className="tab-content">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th className="delete" />
                      </tr>
                    </thead>
                    <tbody>
                    {cart.map((CartItem, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          <img
                            src={image + CartItem.product.image}
                            alt="image"
                            style={{
                              maxWidth: 100,
                              maxHeight: 100,
                              objectFit: "cover"
                            }}
                          />
                        </td>
                        <td className="list text">
                        {CartItem.product.name}
                        </td>
                        <td className="text-center list price">
                          {CartItem.product.price}
                        </td>
                        <input
                            min={1}
                            type="number"
                            id={index}
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            defaultValue={CartItem.quantity}
                            onChange={handleQuantityChange}
                          />
                        <td className="text-center delete">
                          <button
                           onClick={() => handleRemove(index)}
                            className="btn btn-outline-danger btn-sm remove-from-cart"
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                    
                  </table>
                  <div className="cart-btn">
                    <div className="btn-continue">
                      <div className="elm-btn">
                        <a
                          href="{{route('home.index')}}"
                          className="themesflat-button outline ol-accent margin-top-40 hvr-shutter-out-horizontal"
                        >
                          CONTINUE SHOPPING
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="wrap-discount-estimate-cart">
                      <div className="col-lg-4 col-md-4 discount">
                        <h2 className="discount-heading">
                          <a href="#">Discount Codes</a>
                        </h2>
                        <p className="discount-text">
                          Enter your coupin if you have one
                        </p>
                        <input type="text" name="discount-codes" />
                        <div className="elm-btn">
                          <a
                            href="#"
                            className="themesflat-button outline ol-accent margin-top-40 hvr-shutter-out-horizontal"
                          >
                            submit
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 estimate">
                        <h2 className="estimate-heading">
                          <a href="#">Estimate Shipping</a>
                        </h2>
                        <p className="estimate-text">
                          Enter your destination to get shipping
                        </p>
                        <div className="estimate-select country">
                          <div className="title-select">
                            <p>COUNTRY</p>
                          </div>
                          <div className="select">
                            <select>
                              <option value="volvo">United States</option>
                              <option value="saab">Saab</option>
                              <option value="opel">Opel</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                        </div>
                        <div className="estimate-select postal">
                          <div className="title-select">
                            <p>POSTAL CODE/ZIP'</p>
                          </div>
                          <div className="selectt">
                            <select>
                              <option value="volvo">01234567</option>
                              <option value="saab">Saab</option>
                              <option value="opel">Opel</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                        </div>
                        <div className="elm-btn">
                          <a
                            href="#"
                            className="themesflat-button outline ol-accent margin-top-40 hvr-shutter-out-horizontal"
                          >
                            GET A QUOTE
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 cart">
                        <h2 className="cart-heading">
                          <a href="#">Cart Total</a>
                        </h2>
                        <div className="wrap-cart">
                          <div className="sub-total">
                            <span>SUB TOTAL</span>
                            <p className="price">
                            {cartTotal}
                            </p>
                          </div>
                          <div className="shipping">
                            <span>SHIPPING</span>
                            <p className="price">Free</p>
                          </div>
                          <div className="totall">
                            <span>TOTAL</span>
                            <p className="price">
                            {cartTotal}
                            </p>
                          </div>
                        </div>
                        <div className="elm-btn">
                          <Link
                            to="/checkout"
                            className="themesflat-button outline ol-accent margin-top-40 hvr-shutter-out-horizontal"
                          >
                            PROCEED TO CHECK OUT
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div id="tab-order" className="tab-content">
                  <div className="order-complete">
                    <p className="heading-order">
                      Thank you. Your order has been received
                    </p>
                    <div className="order-wrap">
                      <ul className="order-menu">
                        <li>
                          <h3>Order number:</h3>
                          <p>1599</p>
                        </li>
                        <li>
                          <h3>Date:</h3>
                          <p>December 11, 2018</p>
                        </li>
                        <li>
                          <h3>Total:</h3>
                          <p>$88.95</p>
                        </li>
                        <li>
                          <h3>Payment methob:</h3>
                          <p>Cash on delivery</p>
                        </li>
                      </ul>
                    </div>
                    <div className="order-details">
                      <h1>
                        <a href="#">Order details</a>
                      </h1>
                      <div className="order-table">
                        <table className="order-table">
                          <tbody>
                            <tr className="cart-subtotal">
                              <td className="product-name">PRODUCT</td>
                              <td className="total" data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  TOTAL
                                </span>
                              </td>
                            </tr>
                            <tr className="cart-subtotal">
                              <td className="product-name" />
                              <td className="total" data-title="Subtotal">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  29.99
                                </span>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <td className="product-name">
                                Olema Rose Cotes De
                              </td>
                              <td className="total" data-title="Total">
                                {" "}
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  36.89
                                </span>{" "}
                              </td>
                            </tr>
                            <tr className="order-total">
                              <td className="product-name">Total </td>
                              <td
                                className="total text-d90000 font-weight-500"
                                data-title="Total"
                              >
                             
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol ">
                                    $
                                  </span>
                                  66.88
                                </span>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <td className="product-name">Shipping</td>
                              <td className="total" data-title="Total">
                               
                                Free Shipping
                              </td>
                            </tr>
                            <tr className="order-total">
                              <td className="product-name">Payment methob:</td>
                              <td className="total" data-title="Total">
                                
                                Cash on delivery
                              </td>
                            </tr>
                            <tr className="order-total">
                              <td className="title product-name">
                                ORDER TOTAL
                              </td>
                              <td
                                className="total text-d90000 font-weight-500"
                                data-title="Total"
                              >
                                {" "}
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  69.99
                                </span>{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>{" "}
  {/* /main-order-tracking */}
</>
 </Masterlayout>
 
}

export default Cart;