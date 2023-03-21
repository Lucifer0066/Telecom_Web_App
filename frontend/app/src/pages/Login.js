import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";



function Login(props) {
  const [loginForm, setLoginform] = useState({
    username: "",
    password: "",
  });
  


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(loginForm);
    // call api login
    await axios
      .post("http://127.0.0.1:8000/docs#/Authentication/login_login_post", loginForm)
      .then((response) => {
        console.log(response);
        // Save token to local storage
        localStorage.setItem("auth_token", response.data.result.access_token);
        localStorage.setItem(
          "auth_token_type",
          response.data.result.token_type
        );

      });
  };

  return (
    <div>
    <link rel="stylesheet" href="style1.css"></link>
    <div className="logo">
        <a href="home"><img src="images/logo.png" sizes="10px" /></a>
      </div>
  <div className="container">
    <div className="title">Login</div>
    <div className="content">
      <form method="" onSubmit={onSubmitHandler} >
        <div className="user-details">
          <div className="input-box">
            <span className="details">Username/Email</span>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
  );
}

export default Login;
library.add(fab)
