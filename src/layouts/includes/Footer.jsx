import React from 'react';


function Footer(props) {
    
    
    return (
        <footer className="style3">
  <div className="container">
    <div className="footer-widgets">
      <div className="widget widget-logo">
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
      </div>{" "}
      {/* /widget-logo */}
      <div className="widget widget-icon">
        <ul>
          <li className="active">
            <a href="#">
              {" "}
              <i className="fa fa-facebook" aria-hidden="true" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fa fa-twitter" aria-hidden="true" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fa fa-instagram" aria-hidden="true" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fa fa-skype" aria-hidden="true" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fa fa-wordpress" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>{" "}
      {/* /widget-icon */}
      <div className="widget widget-title">
        <h2>Get news &amp; offers</h2>
      </div>{" "}
      {/* /widget-title */}
      <div className="widget widget-contact">
        <input type="search" id="search-footer" placeholder="Your Email" />
        <button type="submit">
          <i className="fa fa-location-arrow" aria-hidden="true" />
        </button>
      </div>{" "}
      {/* /widget-contact */}
      <div className="widget widget-menu">
        <ul>
          <li className="active">
            <a href="About.html"> About Us </a>
          </li>
          <li>
            <a href="Shop-fullwidth-grid.html"> Customer Service </a>
          </li>
          <li>
            <a href="Homepage2.html"> Terms &amp; Conditions </a>
          </li>
          <li>
            <a href="Blog-grid-3column.html"> Privacy Policy </a>
          </li>
          <li className="contact">
            <a href="contact-1.html"> Contact </a>
          </li>
        </ul>
      </div>{" "}
      {/* /widget-about */}
      <div className="widget widget-text">
        <span>© 2019 Created by ThemesFlat. All Rights Reserved</span>
      </div>
    </div>{" "}
    {/* /footer-widgets */}
  </div>{" "}
  {/* /container */}
</footer>
   );
}

export default Footer;