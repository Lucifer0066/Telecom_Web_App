import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentPage from "./PaymentPage";

function Product() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/product`;
    navigate(path);
  };

  let change = useNavigate();
  const pageChange = () => {
    let path = `/payment`;
    change(path);
  };
  return (
    <div>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="register">
                    Plans
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contact us
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  onClick="{routeChange}"
                >
                  GET STARTED
                </button>
              </form>
              <div className="search_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/user-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/bag-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/search-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="product_section layout_padding margin_top0">
        <div className="container">
          <h2 className="tariffs_text">Plans</h2>
          <h1 className="choose_text">Choose your plan</h1>
          <p className="lorem_text1">Choose the best plan according to you.</p>
          <div className="product_section2">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <h2 className="easy_text">Monthly Plans</h2>
                <h1 className="internet_text">Broadband</h1>
                <div className="month_main clearfix">
                  <h1 className="dolor_text">Rs. 399 onwards</h1>
                  <h2 className="month_text">/Month</h2>
                  <p className="long_text">
                    Best plans for broadband connection.
                  </p>
                </div>
                <div className="seemore_main">
                  <div className="see_more">
                    <a href="payment">SEE MORE</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <h2 className="easy_text">Monthly Plans</h2>
                <h1 className="internet_text">Mobile</h1>
                <div className="month_main clearfix">
                  <h1 className="dolor_text">Rs. 199 onwards</h1>
                  <h2 className="month_text">/Month</h2>
                  <p className="long_text">Best plans for mobile recharge.</p>
                </div>
                <div className="seemore_main">
                  <div className="see_more">
                    <a href="example">SEE MORE</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <h2 className="easy_text">Premium Plan</h2>
                <h1 className="internet_text">Broadband + Mobile</h1>
                <div className="month_main clearfix">
                  <h1 className="dolor_text">Rs. 999 onwards</h1>
                  <h2 className="month_text">/Month</h2>
                  <p className="long_text">Best plans for both.</p>
                </div>
                <div className="seemore_main">
                  <div className="see_more">
                    <a href="profile">SEE MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fooer_logo">
                <img src="images/footer-logo.png" />
              </div>
              <h1 className="customer_text">CUSTOMER SERVICE</h1>
              <p className="footer_lorem_text">
                We can provide one platform solution for your all recharges and
                broadband connections.
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">LET US HELP YOU</h1>
              <p className="footer_lorem_text">Thank You</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">INFORMATION</h1>
              <p className="footer_lorem_text1">
                About Us
                <br />
                Careers
                <br />
                Terms & Conditions
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">Website</h1>
              <p className="footer_lorem_text">
                This is telecom website build by react and fastapi.
              </p>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/instagram-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/linkedin-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <div className="border"></div>
          <p className="copyright_text">
            2022 All Rights Reserved. Design by
            <a href="https://github.com/Lucifer0066"> Sagar Pandey</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
