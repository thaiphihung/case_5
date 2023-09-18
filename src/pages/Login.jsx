import React from "react";
import LoginForm from "../components/logins/LoginForm";
function Login(props) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="login/fonts/icomoon/style.css" />
      <link rel="stylesheet" href="loginshop/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="loginshop/css/bootstrap.min.css" />
      <link rel="stylesheet" href="loginshop/css/style.css" />
      <title>Login #5</title>
      <div className="d-md-flex half">
        <div
          className="bg"
          style={{
            backgroundImage: 'url("loginshop/images/kr02-5.jpg")',
          }}
        />
        <div className="contents">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  <div className="text-center mb-5">
                    <h3 className="text-uppercase">
                      Login to <strong>Wizym</strong>
                    </h3>
                  </div>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
