import React from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import CustomerModel from "../../models/CustomerModel";
function Header(props) {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleLogout = () => {
    CustomerModel.logout()
      .then((response) => {
        CustomerModel.deleteCookie("customer");
        Swal.fire({
          icon: "success",
          title: "Đăng xuất thành công",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Đăng xuất thất bại",
        });
      });
  };
  let customer = CustomerModel.getCookie("customer");
  customer = customer ? JSON.parse(customer) : "";



  return (
    <>
      <header className="style1">
        <div id="site-header">
          <div className="container-fluid">
            <a href="index.html" className="logo">
              <img
                src="asset/image/logo.png"
                alt="image"
                width={129}
                height={37}
                data-retina="image/logo-2x.png"
                data-width={147}
                data-height={21}
              />
            </a>
            <div className="mobile-button">
              <span />
            </div>
            <div className="nav-wrap ">
              <nav id="mainnav" className="mainnav">
                <ul className="menu">
                  <li className="active a">
                    <a href="#" title="">
                      HOME
                    </a>
                    <ul className="sub-menu">
                      <li className="active">
                        <a href="index.html" title="">
                          Homepage 1
                        </a>
                      </li>
                      <li>
                        <a href="Homepage2.html" title="">
                          Homepage 2
                        </a>
                      </li>
                      <li>
                        <a href="Homepage3.html" title="">
                          Homepage 3
                        </a>
                      </li>
                      <li>
                        <a href="Homepage4.html" title="">
                          Homepage 4
                        </a>
                      </li>
                      <li>
                        <a href="Homepage5.html" title="">
                          Homepage 5
                        </a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="active">
                    <a href="about.html" title="">
                      FEATURES
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="About.html" title="">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="Event.html" title="">
                          Event
                        </a>
                      </li>
                      <li>
                        <a href="Coming-soon.html" title="">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="404-page.html" title="">
                          404 Page
                        </a>
                      </li>
                      <li>
                        <a href="Wish-list.html" title="">
                          Wish List
                        </a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="active">
                    <a href="#" title="">
                      PRODUCTS
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="Shop-fullwidth-list.html" title="">
                          Shop Full Width List
                        </a>
                      </li>
                      <li>
                        <a href="Shop-fullwidth-grid.html" title="">
                          Shop Full Width Grid
                        </a>
                      </li>
                      <li>
                        <a href="Shop-right-slidebar-list.html" title="">
                          Shop Right Slidebar List
                        </a>
                      </li>
                      <li>
                        <a href="Shop-right-slidebar-grid.html" title="">
                          Shop Right Slidebar Grid
                        </a>
                      </li>
                      <li>
                        <a href="Shop-details-slidebar.html" title="">
                          Shop Details Slidebar
                        </a>
                      </li>
                      <li>
                        <a href="Shop-details.html" title="">
                          Shop Details{" "}
                        </a>
                      </li>
                      <li>
                        <a href="Shop-order-tracking.html" title="">
                          Shop Order Tracking
                        </a>
                      </li>
                      <li>
                        <a href="Shop-cart.html" title="">
                          Shop Cart
                        </a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="active">
                    <a href="#" title="">
                      BLOG
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="Blog-grid-3column.html" title="">
                          Blog Grid 3Column
                        </a>
                      </li>
                      <li>
                        <a href="Blog-grid-2column.html" title="">
                          Blog Grid 2Column
                        </a>
                      </li>
                      <li>
                        <a href="Blog-Right-Slidebar.html" title="">
                          Blog Right Slidebar
                        </a>
                      </li>
                      <li>
                        <a href="Blog-details-slidebar.html" title="">
                          Blog Details Slidebar
                        </a>
                      </li>
                      <li>
                        <a href="Blog-details-fullwidth.html" title="">
                          Blog Details FullWidth
                        </a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="active">
                    <a href="#" title="">
                      CONTACT US
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="contact-1.html" title="">
                          Contact Us 1
                        </a>
                      </li>
                      <li>
                        <a href="Contact-2.html" title="">
                          Contact Us 2
                        </a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                </ul>
              </nav>
            </div>
            {/* /.nav-wrap */}
            <div className="search clearfix">
              <ul>
                <li>
                  <input type="search" id="search" placeholder="Search..." />
                </li>
                <li>
                  <a href="#" className="header-search-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>
                <li>
  <a href="#">
    <i class="fa-solid fa-bars"></i>
  </a>
  <ul className="sub-menu">
    {customer ? ( 
      <>
      <li>
    <h5 className="welcome-message">
      <strong>
        <em>Welcome, {customer.name}</em>
      </strong>
    </h5>
    <button onClick={handleLogout} type="button" className="btn btn-danger logout-button">
      Log Out
    </button>
</li>
      </>
    ) : (
      <>
        <li>
          <Link to="/login" title="Login">
            Login/ Register
          </Link>
        </li>
        <li>
          <a href="projects1.html" title="">
            My Account
          </a>
        </li>
        <li>
          <a href="projects1.html" title="">
            My Wishlist
          </a>
        </li>
        <li>
          <a href="projects1.html" title="">
            My Cart
          </a>
        </li>
        <li>
          <a href="projects1.html" title="">
            Tracking Orders
          </a>
        </li>
     
      
      </>
    )}
  </ul>
  {/* /.sub-menu */}
</li>
                <Link to="/cart" className="btn px-0 ml-3">
                <li class="btn btn-outline-dark" >
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart
                        <span class="badge badge-danger-white">
                        {cart.length}
                        </span>
                    </li>
                </Link>
                
              </ul>
              <form
                className="header-search-form"
                role="search"
                method="get"
                action="#"
              >
                <input
                  type="text"
                  defaultValue=""
                  name="#"
                  className="header-search-field"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="header-search-submit"
                  title="Search"
                >
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
          {/* /container */}
        </div>
      </header>
      <div className="flat-slider style1">
        {/* SLIDER */}
        <div className="rev_slider_wrapper fullwidthbanner-container">
          <div id="rev-slider1" className="rev_slider fullwidthabanner">
            <ul>
              {/* Slide 1 */}
              <li data-transition="random">
                {/* Main Image */}
                <img
                  src="asset/image/homepage11.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-no-retina=""
                />
                <div className="overlay" />
                {/* Layers */}
                <div
                  className="tp-caption tp-resizeme text-ffb922 font-rubik font-weight-500 wellcome"
                  data-x="['left','left','left','center']"
                  data-hoffset="['2','4','4','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-132','-118','-98','-78']"
                  data-fontsize="['36','20','20','16']"
                  data-lineheight="['48','48','28','14']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={700}
                  data-splitin="none"
                  data-splitout="none"
                  data-paddingleft="['3','3','3','3']"
                  data-responsive_offset="on"
                >
                  Welcome to Wizym
                </div>
                <div
                  className="tp-caption tp-resizeme font-rubik font-weight-700 best"
                  data-x="['left','left','left','center']"
                  data-hoffset="['-4','-4','-4','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-60','-60','-50','-40']"
                  data-fontsize="['72','60','40','32']"
                  data-lineheight="['80','80','45','35']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  {" "}
                  <a href="#" className="text-white">
                    Best Of Wine Store
                  </a>{" "}
                </div>
                <div
                  className="tp-caption tp-resizeme text-white font-rubik font-weight-400 text-wizym"
                  data-x="['left','left','left','center']"
                  data-hoffset="['0','-2','-2','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['27','27','27','17']"
                  data-fontsize="['18','18','16','14']"
                  data-lineheight="['32','32','26','22']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-paddingright="['550','155','50','2']"
                >
                  Wizym offers extensive collections of over 2,000 unique wines
                  from prestigious brands to family-owed wineries{" "}
                </div>
                <div
                  className="tp-caption"
                  data-x="['left','left','left','center']"
                  data-hoffset="['0','-4','-4','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['102','102','92','70']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-paddingtop="['50','50','50','50']"
                  data-paddingbottom="['50','50','50','50']"
                >
                  {" "}
                  <a href="#" className="btn btn-styl button-project">
                    READ MORE
                  </a>
                </div>
              </li>
              {/* /End Slide 1 */}
              {/* Slide 2 */}
              <li data-transition="random">
                {/* Main Image */}
                <img
                  src="asset/image/homepage11.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-no-retina=""
                />
                <div className="overlay" />
                {/* Layers */}
                <div
                  className="tp-caption tp-resizeme text-ffb922 font-rubik font-weight-500 wellcome"
                  data-x="['left','left','left','center']"
                  data-hoffset="['2','4','4','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-132','-118','-98','-78']"
                  data-fontsize="['36','20','20','16']"
                  data-lineheight="['48','48','28','14']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={700}
                  data-splitin="none"
                  data-splitout="none"
                  data-paddingleft="['3','3','3','3']"
                  data-responsive_offset="on"
                >
                  Welcome to Wizym
                </div>
                <div
                  className="tp-caption tp-resizeme font-rubik font-weight-700 best"
                  data-x="['left','left','left','center']"
                  data-hoffset="['-4','-4','-4','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-60','-60','-50','-40']"
                  data-fontsize="['72','60','40','32']"
                  data-lineheight="['80','80','45','35']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  {" "}
                  <a href="#" className="text-white">
                    Best Of Wine Store
                  </a>{" "}
                </div>
                <div
                  className="tp-caption tp-resizeme text-white font-rubik font-weight-400 text-wizym"
                  data-x="['left','left','left','center']"
                  data-hoffset="['0','-2','-2','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['27','27','27','17']"
                  data-fontsize="['18','18','16','14']"
                  data-lineheight="['32','32','26','22']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-paddingright="['550','155','50','2']"
                >
                  Wizym offers extensive collections of over 2,000 unique wines
                  from prestigious brands to family-owed wineries{" "}
                </div>
                <div
                  className="tp-caption"
                  data-x="['left','left','left','center']"
                  data-hoffset="['0','-4','-4','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['102','102','92','70']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                  data-paddingtop="['50','50','50','50']"
                  data-paddingbottom="['50','50','50','50']"
                >
                  {" "}
                  <a href="#" className="btn btn-styl button-project">
                    READ MORE
                  </a>
                </div>
              </li>
              {/* /End Slide 2 */}
            </ul>
          </div>
        </div>
      </div>{" "}
      {/* /.flat-slider */}
    </>
  );
}

export default Header;
