import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masterlayout from "../layouts/Masterlayout";
import { SET_CART } from "../redux/action";
import CustomerModel from "../models/CustomerModel";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OrderModel from "../models/OrderModel";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên người nhận!"),
  email: Yup.string().required("Vui lòng nhập email!"),
  phone: Yup.string().required("Vui lòng nhập số điện thoại người nhận!"),
  address: Yup.string().required("Vui lòng nhập địa chỉ!"),
});

function Checkout(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.product.price * cartItem.quantity;
    });
    setCartTotal(total);
  }, [cart]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const initialValues = {
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    const customerCookie = CustomerModel.getCookie("customer");
    if (customerCookie) {
      const customerData = JSON.parse(customerCookie);
      setCustomer(customerData);
    }
  }, []);

  const handleSubmit = (values) => {
    values.cart = cart;
    values.customer_id = customer.id;
    console.log(values);
    OrderModel.checkout(values)
    .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Thanh toán thành công!",
          showConfirmButton: false, 
          timer: 1500,
        });

        localStorage.removeItem("cart");
        dispatch({ type: SET_CART, payload: [] });

        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Thanh toán thất bại!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <Masterlayout>
      <>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-75">
              <div className="container">
                <Form>
                  <div className="row">
                    <div className="col-50">
                      <h3>Billing Address</h3>
                      <label htmlFor="fname">
                        <i className="fa fa-user" /> Full Name
                      </label>
                      <Field
                        type="text"
                        id="fname"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                      />
                      <label htmlFor="email">
                        <i className="fa fa-envelope" /> Email
                      </label>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">
                        <i className="fa fa-phone" /> Phone
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="adr">
                        <i className="fa fa-address-card-o" /> Address
                      </label>
                      <Field
                        type="text"
                        id="adr"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button
                    className="checkout-button"
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "14px 20px",
                      margin: "8px 0",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      borderRadius: "4px",
                      fontSize: "16px",
                    }}
                  >
                    Thanh toán
                  </button>
                  <label>
                    <Field
                      type="checkbox"
                      defaultChecked="checked"
                      name="sameadr"
                    />{" "}
                    Shipping address same as billing
                  </label>
                </Form>
              </div>
            </div>
            {cart.map((CartItem, index) => (
              <div className="col-25">
                <div className="container">
                  <h4>
                    Cart{" "}
                    <span className="price" style={{ color: "black" }}>
                      <i className="fa fa-shopping-cart" />{" "}
                      <b>{CartItem.quantity}</b>
                    </span>
                  </h4>
                  <p>
                    <a href="#">{CartItem.product.name}</a>{" "}
                    <span className="price">${CartItem.product.price}</span>
                  </p>
                  <hr />
                  <p>
                    Total{" "}
                    <span className="price" style={{ color: "black" }}>
                      <b>${cartTotal}</b>
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Formik>
      </>
    </Masterlayout>
  );
}

export default Checkout;
