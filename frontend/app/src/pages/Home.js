import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/product`;
    navigate(path);
  };
  let change = useNavigate();
  const pageChange = () => {
    let path = "/contact";
    change(path);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  {
    return (
      <div className="row">
        <div className="medium-12 columns">
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
                      <a className="nav-link" href="product">
                        Plans
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="register">
                        Register
                      </a>
                    </li>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle nav caret>
                        More
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="contact">Contact Us</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="profile">Guest Profile</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      onClick={routeChange}
                    >
                      GET STARTED
                    </button>
                  </form>
                  <div className="search_icon">
                    <ul>
                      <li>
                        <a href="register">
                          <img src="images/user-icon.png" />
                        </a>
                      </li>
                      <li>
                        <a href="product">
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
            <div className="banner_section layout_padding">
              <div className="container">
                <div
                  id="main_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="your_text">Different Platforms</h1>
                          <h1 className="Shows_text">One SOLUTION.</h1>
                          <p className="there_text">
                            These is Web Application for recharge and broadband
                            connection.
                          </p>
                          <div className="start_bt">
                            <a href="#">Start Now</a>
                          </div>
                          <div className="read_bt">
                            <a href="#">Read More</a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="images_1">
                            <img src="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="your_text">Your Favorite</h1>
                          <h1 className="Shows_text">Shows And Movies</h1>
                          <p className="there_text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or
                          </p>
                          <div className="start_bt">
                            <a href="#">Start Now</a>
                          </div>
                          <div className="read_bt">
                            <a href="#">Read More</a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="images_1">
                            <img src="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-6">
                          <h1 className="your_text">Your Favorite</h1>
                          <h1 className="Shows_text">Shows And Movies</h1>
                          <p className="there_text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or
                          </p>
                          <div className="start_bt">
                            <a href="#">Start Now</a>
                          </div>
                          <div className="read_bt">
                            <a href="#">Read More</a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="images_1">
                            <img src="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#main_slider"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa-arrow-left">
                      <img src="images/left-arrow.png" />
                    </i>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#main_slider"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa-angle-right">
                      <img src="images/right-arrow.png" />
                    </i>
                  </a>
                </div>
                <div className="banner_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <div className="box_main">
                        <div className="internet_icon"></div>
                        <h4 className="broadband_text">Broadband</h4>
                        <p className="many_text">
                          You can apply for new broadband connection.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <div className="box_main">
                        <div className="internet_icon2"></div>
                        <h4 className="broadband_text">Recharge</h4>
                        <p className="many_text">
                          You can view plans and can do recharge on it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="subscribe_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="subscribe_text">Subscribe Now</h1>
                </div>
                <div className="col-sm-8">
                  <div className="mail_main">
                    <input
                      type="text"
                      className="address_text1"
                      placeholder="Enter your address"
                      name="text"
                    />
                    <button
                      type="button"
                      className="get_bt1"
                      onClick={pageChange}
                    >
                      GET STARTED
                    </button>
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
                    We can provide one platform solution for your all recharges
                    and broadband connections.
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
                    This is a telecom website build by react and fastapi.
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
      </div>
    );
  }
}

export default Home;
