import React, { useState } from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import CustomerModel from "../../models/CustomerModel";

const SignupSchema = Yup.object().shape({
  email: Yup.string().required("Vui lòng nhập email !"),
  password: Yup.string().required("Vui lòng nhập mật khẩu !"),
});

const initialValues = {
  email: "",
  password: "",
};

function LogInForm(props) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
      console.log(values);
    CustomerModel.login(values)
      .then((res) => {
        CustomerModel.setCookie(
          "customer",
          JSON.stringify(res.customer),
          res.expires_in
        );
        localStorage.setItem("token", res.access_token);
        navigate("/");
        handleLoginSuccess();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Có lổi xảy ra khi đăng nhập !",
          text: err.message,
        });
      });
  };
  const handleLoginSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Đăng nhập thành công!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      <Form className="login">
        <div className="form-group first">
          <label htmlFor="username">Email</label>
          <Field
            type="text"
            className="form-control"
            placeholder="your-email@gmail.com"
            id="username"
            name="email"
          />
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
        </div>
        <div className="d-sm-flex mb-5 align-items-center">
          <label className="form-check-label">
            <span className="caption">Remember me</span>
            <input type="checkbox" defaultChecked="" name="" />
          </label>
          <span className="ml-auto">
            <a href="/register" className="forgot-pass">
              Register
            </a>
          </span>
          <span className="ml-auto">
            <a href="#" className="forgot-pass">
              Forgot Password
            </a>
          </span>
        </div>
        <button
          type="submit"
          className="btn btn-block py-2 btn-primary"
          style={{ backgroundColor: "orange" }}
        >
          Log In
        </button>
        <span className="text-center my-3 d-block">or</span>
        <div className="">
          <a href="#" className="btn btn-block py-2 btn-facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>{" "}
            Login with facebook
          </a>
          <a href="#" className="btn btn-block py-2 btn-google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>{" "}
            Login with Google
          </a>
        </div>
      </Form>
    </Formik>
  );
}

export default LogInForm;
