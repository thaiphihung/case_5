import React from "react";
import Header from "./includes/Header";
import Footer from "./includes/Footer";

function Masterlayout({ children }) {
  return (
    <>
      <Header />
      <div id="wrapper" className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Masterlayout;
