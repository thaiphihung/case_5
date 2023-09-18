import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import CustomerModel from "../models/CustomerModel";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên!"),
  email: Yup.string().required("Vui lòng nhập email!"),
  phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

function Register(props) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    CustomerModel.register(values)
    .then((res) => {
        // console.log(values);
        navigate("/");
        handleRegisterSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Có lỗi xảy ra khi đăng ký!",
          text: err.message,
        });
      });
  };

  const handleRegisterSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Đăng ký tài khoản thành công vui lòng đăng nhập!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (

    <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="login/fonts/icomoon/style.css" />
    <link
      rel="stylesheet"
      href="loginshop/css/owl.carousel.min.css"
    />
    <link rel="stylesheet" href="loginshop/css/bootstrap.min.css" />
    <link rel="stylesheet" href="loginshop/css/style.css" />
    <title>Login #5</title>
    <div className="d-md-flex half">
      <div
        className="bg"
        style={{
          backgroundImage: 'url("loginshop/images/kr02-5.jpg")'
        }}
      />
      <div className="contents">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="form-block mx-auto">
                <div className="text-center mb-5">
                  <h3 className="text-uppercase">
                    Register to <strong>Wizym</strong>
                  </h3>
                </div>
                <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
         <Form>
                  <div className="form-group first">
                    <label htmlFor="name">Username</label>
                    <Field
                      type="name"
                      className="form-control"
                      placeholder="Username"
                      id="name"
                      name="name"
                    />
                     <ErrorMessage name="name" component="div" className="error-message" />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="your-email@gmail.com"
                      id="email"
                      name="email"
                    />
                     <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      id="password"
                      name="password"
                    />
                     <ErrorMessage name="password" component="div" className="error-message" />

                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Confirm Password</label>
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      id="password2"
                      name="password2"
                    />
                     <ErrorMessage name="password2" component="div" className="error-message" />

                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="address">Address</label>
                    <Field
                      type="address"
                      className="form-control"
                      placeholder="Address"
                      id="address"
                      name="address"
                    />
                     <ErrorMessage name="address" component="div" className="error-message" />

                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="phone">Phone</label>
                    <Field
                      type="phone"
                      className="form-control"
                      placeholder="Phone number"
                      id="phone"
                      name="phone"
                    />
                     <ErrorMessage name="phone" component="div" className="error-message" />

                  </div>
                  <div className="d-sm-flex mb-5 align-items-center">
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <div className="d-sm-flex mb-5 align-items-center">
                    <span className="ml-auto">
                      <a href="" className="forgot-pass">
                        Login
                      </a>
                    </span>
                  </div>
                  <input
                    type="submit"
                    defaultValue="Register"
                    className="btn btn-block py-2 btn-primary"
                  />
                </Form>
      </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default Register;