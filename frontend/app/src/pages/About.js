import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/product`; 
    navigate(path);
  }

  return (
    <div>
      <div>
        <div class="header_section">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="logo">
                <a href="index.html">
                  <img src="images/logo.png" />
                </a>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="registr">
                      Register
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="product">
                      Plans
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login">
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact">
                      Contact us
                    </a>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={routeChange}
                  >
                    GET STARTED
                  </button>
                </form>
                <div class="search_icon">
                  <ul>
                    <li>
                      <a href="login">
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
        <div class="about_section layout_padding">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="image_2">
                  <img src="images/img-2.png" />
                </div>
              </div>
              <div class="col-md-6">
                <h1 class="live_text">
                  Best platform for all your connection services.
                </h1>
                <p class="lorem_text">
                  It is react based web application for telecom services.
                </p>
                <div class="online_bt_main">
                  <div class="online_bt">
                    <a href="#">Broadband Connection</a>
                  </div>
                  <div class="online_bt1">
                    <a href="#">Mobile Recharge</a>
                  </div>
                  <div class="read_bt1">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_section layout_padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="fooer_logo">
                  <img src="images/footer-logo.png" />
                </div>
                <h1 class="customer_text">CUSTOMER SERVICE</h1>
                <p class="footer_lorem_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by
                </p>
              </div>
              <div class="col-lg-3 col-sm-6">
                <h1 class="customer_text">LET US HELP YOU</h1>
                <p class="footer_lorem_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by
                </p>
              </div>
              <div class="col-lg-3 col-sm-6">
                <h1 class="customer_text">INFORMATION</h1>
                <p class="footer_lorem_text1" />
                About Us
                <br />
                Carerrs
                <br />
                Sell on shopee
                <br />
                Press & News
                <br />
                Competitions
                <br />
                Terms & Conditions
                <p />
                <div />
                <div class="col-lg-3 col-sm-6">
                  <h1 class="customer_text">OUR SHOP</h1>
                  <p class="footer_lorem_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by
                  </p>
                  <div class="social_icon">
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
                          <img src="images/linkedin-icon.png/" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright_section">
            <div class="container">
              <div class="border"></div>
              <p class="copyright_text">
                2020 All Rights Reserved. Design by{" "}
                <a href="https://html.design">Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
