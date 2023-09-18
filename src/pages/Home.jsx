import React, { useEffect, useState } from "react";
import Masterlayout from "../layouts/Masterlayout";
import axios from "axios";
import ProductModel from "../models/ProductModel";
import ProductItem from "../components/products/ProductItem";
import { useSelector } from "react-redux";

function Home(props) {
  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);
  const cart = useSelector((state) => state.cart);
  const handleViewMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };
  useEffect(() => {
    ProductModel.all()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Masterlayout>
      <>
        <div className="main-homepage-1">
          <section className="flat-about style1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-7">
                  <div className="image-single">
                    <img src="asset/image/homepage144.png" alt="image" />
                  </div>
                </div>{" "}
                {/* /col-lg-7 */}
                <div className="col-lg-5 col-md-5">
                  <div className="flat-divider margin-top50px" />
                  <div className="flat-textbox">
                    <h3 className="textbox-title">
                      <a href="#"> Our Form Wizym </a>
                    </h3>
                    <h1 className="textbox-main">
                      <a href="#"> Welcome To Wizym </a>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam quis nostrud.
                    </p>
                  </div>{" "}
                  {/* /flat-textbox */}
                  <div className="flat-divider margin-top24px" />
                  <div className="information">
                    <div className="information-address">
                      <span>Address:</span>
                      <span className="information-content">
                        40 Baria Sreet 133/2, NY, US
                      </span>
                    </div>
                    <div className="information-hotline information-bottom">
                      <span>Hotline:</span>
                      <span className="information-content">
                        1-677-124-44227
                      </span>
                    </div>
                    <div className="information-open information-bottom">
                      <span>We're Open</span>
                      <span className="information-content">
                        Mon-Sun: 9.00 - 20.00
                      </span>
                    </div>
                  </div>{" "}
                  {/* /information */}
                </div>
                {/* /col-lg-5 */}
              </div>{" "}
              {/* /row*/}
            </div>{" "}
            {/* /container */}
          </section>{" "}
          {/* /flat-about */}
          <section className="flat-our-product our-product-new">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-section">
                    <h3 className="our-product-title">
                      <a href="#"> Our Products </a>
                    </h3>
                    <h1 className="our-product-main">
                      <a href="#"> Popular This Month </a>
                    </h1>
                    <div className="our-product-image">
                      <img src="asset/image/homepage14.png" alt="image" />
                    </div>
                  </div>{" "}
                  {/* /title-section */}
                </div>{" "}
                {/* /col-lg-12 */}
                <div className="row px-xl-5">
                  <div className="col-lg-12">
                    <div className="d-flex flex-wrap">
                      {products.slice(0, visibleItems).map((product, key) => (
                        <div
                          className="col-lg-3 col-md-6 col-sm-6 pb-1"
                          key={key}
                        >
                          <ProductItem product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* /product-content */}
                {visibleItems < products.length && (
                  <div className="elm-btn">
                    <button
                      type="button"
                      className="themesflat-button outline ol-accent margin-top-40 hvr-shutter-out-horizontal"
                      onClick={handleViewMore}
                    >
                      VIEW MORE
                    </button>
                  </div>
                )}
              </div>{" "}
              {/* /row */}
            </div>{" "}
            {/* /container */}
          </section>{" "}
          {/* /flat-out-product */}
          <section className="flat-deal-of-the-week style1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-section">
                    <h3 className="our-product-title">
                      <a href="#"> Our Products </a>
                    </h3>
                    <h1 className="our-product-main">
                      <a href="#"> Deal Of The Week </a>
                    </h1>
                    <div className="our-product-image">
                      <img src="asset/image/homepage14.png" alt="image" />
                    </div>
                  </div>{" "}
                  {/* /title-section */}
                </div>{" "}
                {/* /col-lg-12 */}
                <div className="col-lg-6 col-md-12">
                  <div className="flat-deal-week">
                    <img src="asset/image/homepage22.png" alt="image" />
                    <div
                      className="flat-counter count-time"
                      data-day={20}
                      data-month={3}
                      data-year={2019}
                      data-hour={12}
                      data-minute={12}
                      data-second={12}
                    >
                      <div className="counter">
                        <ul>
                          <li className="content-counter">
                            <div className="wrap-bg">
                              <div className="inner-bg days">
                                <div
                                  className="numb-count numb"
                                  data-from={0}
                                  data-to={18}
                                  data-speed={2000}
                                  data-inviewport="yes"
                                >
                                  18
                                </div>
                                <div className="name-count">Day</div>
                              </div>
                            </div>
                          </li>
                          <li className="content-counter">
                            <div className="wrap-bg">
                              <div className="inner-bg hours">
                                <div
                                  className="numb-count numb"
                                  data-from={0}
                                  data-to={11}
                                  data-speed={2000}
                                  data-inviewport="yes"
                                >
                                  11
                                </div>
                                <div className="name-count">Hour</div>
                              </div>
                            </div>
                          </li>
                          <li className="content-counter">
                            <div className="wrap-bg">
                              <div className="inner-bg minutes">
                                <div
                                  className="numb-count numb"
                                  data-from={0}
                                  data-to={14}
                                  data-speed={2000}
                                  data-inviewport="yes"
                                >
                                  14
                                </div>
                                <div className="name-count">Min</div>
                              </div>
                            </div>
                          </li>
                          <li className="content-counter">
                            <div className="wrap-bg numb">
                              <div className="inner-bg seconds">
                                <div
                                  className="numb-count numb"
                                  data-from={0}
                                  data-to={47}
                                  data-speed={2000}
                                  data-inviewport="yes"
                                >
                                  47
                                </div>
                                <div className="name-count">Sec</div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>{" "}
                      {/* /counter */}
                    </div>{" "}
                    {/* /flat-counter */}
                  </div>{" "}
                  {/* /flat-deal-week */}
                </div>{" "}
                {/* /col-lg-6 */}
                <div className="col-lg-6 col-md-12">
                  <div className="flat-deal-week-content">
                    <h3 className="deal-week-title">
                      <a href="#"> 51 Eden Valley Riesling 1918</a>
                    </h3>
                    <span className="deal-week-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam quis nostrud.
                    </span>
                    <span className="flat-dolar">$22.99</span>
                    <div className="elm-btn">
                      <a
                        href="#"
                        className="themesflat-button outline ol-accent margin-top-40 hvr-shutter-out-horizontal"
                      >
                        BUY NOW
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* /col-lg-6 */}
              </div>{" "}
              {/* /row */}
            </div>{" "}
            {/* /container */}
          </section>{" "}
          {/* /flat-deal-our-of-the-week */}
          <section className="flat-products style1 straight ">
            <div className="container">
              <div className="row straight">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="flat-latest">
                    <div className="latest-title mb-mgtop0">
                      <h3>
                        <a href="#">Latest Products</a>
                      </h3>
                    </div>
                    <div className="flat-next">
                      <a href="#">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </div>
                    <article className="post-border post-top">
                      <div className="featured-post">
                        <img src="asset/image/homepage28.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Laboure Chardonnay </a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$19.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                    <article className="post-border post-between">
                      <div className="featured-post">
                        <img src="asset/image/homepage29.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Godiva Chocolates Gift</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$28.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                    <article className="post-border post-between">
                      <div className="featured-post">
                        <img src="asset/image/homepage30.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Bertrana Cap Insula Red</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$22.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>{" "}
                {/* /col-lg-4 */}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="flat-latest">
                    <div className="latest-title title-between">
                      <h3>
                        <a href="#">Top Rated Products</a>
                      </h3>
                    </div>
                    <div className="flat-next">
                      <a href="#">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </div>
                    <article className="post-border post-top">
                      <div className="featured-post">
                        <img src="asset/image/homepage31.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Red Wine Trio 1988</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$22.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                    <article className="post-border post-between">
                      <div className="featured-post">
                        <img src="asset/image/homepage32.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Dreaming Wine Trio</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$28.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                    <article className="post-border post-between">
                      <div className="featured-post">
                        <img src="asset/image/homepage33.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Hall Eighteen Seventy</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$49.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>{" "}
                {/* /col-lg-4 */}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="flat-latest">
                    <div className="latest-title title-bottom">
                      <h3>
                        <a href="#">Review Products</a>
                      </h3>
                    </div>
                    <div className="flat-next">
                      <a href="#">
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </div>
                    <article className="post-border post-top">
                      <div className="featured-post">
                        <img src="asset/image/homepage34.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Brothers Patricia Pinot</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$24.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                    <article className="post-border post-between">
                      <div className="featured-post">
                        <img src="asset/image/homepage35.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> Adelaide Hills Chardonnay</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$49.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                    <article className="post-border post-between">
                      <div className="featured-post">
                        <img src="asset/image/homepage36.png" alt="image" />
                      </div>
                      <div className="content-post">
                        <div className="post-title">
                          <span>
                            <a href="#"> 51 Eden Valley Riesling 1918</a>
                          </span>
                        </div>
                        <div className="post-dolar">
                          <span>$19.99</span>
                        </div>
                        <div className="post-rating">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>{" "}
                {/* /col-lg-4 */}
              </div>{" "}
              {/* /row */}
            </div>{" "}
            {/* /container */}
          </section>{" "}
          {/* /flat-prodcuts */}
          <section className="flat-event style1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-section">
                    <h3 className="our-product-title">
                      <a href="#"> Dont't Miss Anything </a>
                    </h3>
                    <h1 className="our-product-main">
                      <a href="#"> Upcoming Events </a>
                    </h1>
                    <div className="our-product-image-background">
                      <img src="asset/image/test.png" alt="image" />
                    </div>
                  </div>{" "}
                  {/* /title-section */}
                </div>
                <div className="col-lg-12">
                  <div
                    className="flat-carousel-box data-effect clearfix"
                    data-gap={30}
                    data-column={4}
                    data-column2={2}
                    data-column3={1}
                    data-dots="true"
                    data-auto="false"
                  >
                    <div className="owl-carousel">
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">14</h1>
                            <span>March</span>
                          </div>
                          <div className="team-meta">
                            <span>SunDay: 11.30 - 19.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Adgio Vertical Tasting</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$28.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">18</h1>
                            <span>March</span>
                          </div>
                          <div className="team-meta">
                            <span>Monday: 9.30 - 15.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Reasons To Be Cheerful</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$30.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">27</h1>
                            <span>April</span>
                          </div>
                          <div className="team-meta">
                            <span>Thursday: 9.30 - 11.30 AM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> New Wines For Old?</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$22.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">11</h1>
                            <span>April</span>
                          </div>
                          <div className="team-meta">
                            <span>Friday: 8.00 - 11.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Catering For Higher</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$18.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">14</h1>
                            <span>March</span>
                          </div>
                          <div className="team-meta">
                            <span>SunDay: 11.30 - 19.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Adgio Vertical Tasting</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$28.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">18</h1>
                            <span>March</span>
                          </div>
                          <div className="team-meta">
                            <span>Monday: 9.30 - 15.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Reasons To Be Cheerful</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$30.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">27</h1>
                            <span>April</span>
                          </div>
                          <div className="team-meta">
                            <span>Thursday: 9.30 - 11.30 AM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> New Wines For Old?</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$22.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">11</h1>
                            <span>April</span>
                          </div>
                          <div className="team-meta">
                            <span>Friday: 8.00 - 11.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Catering For Higher</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$18.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">14</h1>
                            <span>March</span>
                          </div>
                          <div className="team-meta">
                            <span>SunDay: 11.30 - 19.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Adgio Vertical Tasting</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$28.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">18</h1>
                            <span>March</span>
                          </div>
                          <div className="team-meta">
                            <span>Monday: 9.30 - 15.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Reasons To Be Cheerful</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$30.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">27</h1>
                            <span>April</span>
                          </div>
                          <div className="team-meta">
                            <span>Thursday: 9.30 - 11.30 AM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> New Wines For Old?</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$22.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                      <div className="team-member">
                        <div className="team-border">
                          <div className="team-title">
                            <h1 className="title">11</h1>
                            <span>April</span>
                          </div>
                          <div className="team-meta">
                            <span>Friday: 8.00 - 11.30 PM</span>
                          </div>
                          <div className="team-content">
                            <h2>
                              <a href="#"> Catering For Higher</a>
                            </h2>
                          </div>
                          <div className="team-dolar">
                            <span>$18.99/Per Person</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /owl-carouse */}
                  </div>{" "}
                  {/* /flat-carousel-box */}
                </div>{" "}
                {/* /col-lg-12 */}
              </div>{" "}
              {/* /row */}
            </div>{" "}
            {/* /container */}
          </section>{" "}
          {/* /flat-event */}
          <section className="flat-new-latest style1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="title-section">
                    <h3 className="our-product-title">
                      <a href="#"> Our Blog </a>
                    </h3>
                    <h1 className="our-product-main">
                      <a href="#"> News Latest </a>
                    </h1>
                    <div className="our-product-image">
                      <img src="asset/image/homepage14.png" alt="image" />
                    </div>
                  </div>{" "}
                  {/* /title-section */}
                </div>
                <div className="col-lg-6 col-md-6">
                  <article className="post">
                    <div className="featured-post">
                      <img src="asset/image/homepage44.png" alt="image" />
                    </div>
                    <div className="content-post">
                      <div className="post-title">
                        <span>
                          <a href="#">Restaurant, The Wines</a>
                        </span>
                      </div>
                      <div className="post-content">
                        <h3>
                          <a href="#">
                            Champagne billecart-Salmon Releases Rare 'Cuvée 200'
                            To Celebrate 200 Years
                          </a>
                        </h3>
                      </div>
                      <div className="post-meta">
                        <span>
                          <a href="#">May 28, 2018</a>
                        </span>
                      </div>
                      <div className="post-btn">
                        <span>
                          <a href="#">
                            READ MORE{" "}
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="content-box">
                    <ul>
                      <li>
                        <span className="box-heading">
                          <a href="#">The Wines, Grape Wine</a>
                        </span>
                        <h3 className="box-content">
                          <a href="#">
                            World Wine Awards 2018: Full results now available
                          </a>
                        </h3>
                        <span className="box-meta">
                          <a href="#">June 02, 2018</a>
                        </span>
                      </li>
                      <li className="box-border">
                        <span className="box-heading">
                          <a href="#">Restaurant, Grape Wine</a>
                        </span>
                        <h3 className="box-content">
                          <a href="#">
                            Taittinger launches Comtes de Champagne 2007
                          </a>
                        </h3>
                        <span className="box-meta">
                          <a href="#">June 08, 2018</a>
                        </span>
                      </li>
                      <li className="box-border">
                        <span className="box-heading">
                          <a href="#">The Wines, Rose</a>
                        </span>
                        <h3 className="box-content">
                          <a href="#">Jefford on Monday: "Fine, fresh wines"</a>
                        </h3>
                        <span className="box-meta">
                          <a href="#">June 12, 2018</a>
                        </span>
                      </li>
                      <li className="box-border">
                        <span className="box-heading">
                          <a href="#">Bordeaux, Champagne</a>
                        </span>
                        <h3 className="box-content">
                          <a href="#">
                            Colgate-Palmolive renews with Morz in Malaysia
                          </a>
                        </h3>
                        <span className="box-meta">
                          <a href="#">June 19, 2018</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          {/* /flat-latest */}
        </div>{" "}
        {/* /homepage1 */}
      </>
    </Masterlayout>
  );
}

export default Home;
