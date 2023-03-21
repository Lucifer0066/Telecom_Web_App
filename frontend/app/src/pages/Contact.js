import React from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/product`; 
    navigate(path);
  }
  return (
    <div>
    <div className="header_section">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo">
                    <a href="index.html"><img src="images/logo.png" /></a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="product">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={routeChange}>GET STARTED</button>
                    </form>
                    <div className="search_icon">
                        <ul>
                            <li>
                                <a href="#"><img src="images/user-icon.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="images/bag-icon.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="images/search-icon.png" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="contact_section layout_padding">
        <div className="container">
            <h1 className="check_text">Share your precious feedback with us.</h1>
            <div className="contact_section2">
                <div className="addres_main">
                    <div className="input_bg">
                        <h3 className="fact_text">It is a long established fact that a reader will be distracted</h3>
                        <input type="text" className="address_text" placeholder="Enter your address" name="text" />
                        <button type="button" className="get_bt">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer_section layout_padding margin_top0">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="fooer_logo"><img src="images/footer-logo.png" /></div>
                    <h1 className="customer_text">CUSTOMER SERVICE</h1>
                    <p className="footer_lorem_text">There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h1 className="customer_text">LET US HELP YOU</h1>
                    <p className="footer_lorem_text">There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h1 className="customer_text">INFORMATION</h1>
                    <p className="footer_lorem_text1">
                        About Us<br />
                        Careers<br />
                        Sell on shopee<br />
                        Press & News<br />
                        Competitions<br />
                        Terms & Conditions
                    </p>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <h1 className="customer_text">OUR SHOP</h1>
                    <p className="footer_lorem_text">There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                    <div className="social_icon">
                        <ul>
                            <li>
                                <a href="#"><img src="images/fb-icon.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="images/twitter-icon.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="images/instagram-icon.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img src="images/linkedin-icon.png" /></a>
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
            <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html Templates</a></p>
        </div>
    </div>
</div>
  )
}

export default Contact
