import React from "react";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../../redux/action";


<link rel="stylesheet" href="styles.css"></link>

function ProductItem({ product }) {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const image = "http://127.0.0.1:8000/";

  const handleAddToCart = () => {
    const product_cart = cart.find((item) => item.product_id === product.id);

    if (product_cart) {
      product_cart.quantity++;
      const updatedCart = [...cart];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch({ type: SET_CART, payload: updatedCart });
    } else {
      let item = {
        product_id: product.id,
        quantity: 1,
        product: product,
      };
      const updatedCart = [...cart, item];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch({ type: SET_CART, payload: updatedCart });
    }
  };

  return (
    <div className="product-image">
      <ul className="product clearfix">
        <li className="product-item" key={product.id}>
          <div className="product-thumb clearfix">
            <a href="#" className="product-image">
              <img src={image + product.image} alt="image" />
            </a>
          </div>
          <div className="product-info text-center clearfix">
            <span className="product-title">{product.name}</span>
            <div className="price">
              <ins>
                <span className="amount">{product.price}.$</span>
              </ins>
            </div>
          </div>
          <div className="product-review">
            <div className="add-cart">
              <a href="#" className="like1">
                <i className="fa fa-refresh" aria-hidden="true" />
              </a>
            </div>
            <div className="add-cart">
              <a href="#" className="like2">
                <i className="fa fa-heart-o" />
              </a>
            </div>
            <div className="add-cart">
              <a href="#" className="like3" onClick={handleAddToCart}>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductItem;