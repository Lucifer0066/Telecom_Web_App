import React from "react";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [signupform, setSignupForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const onChangeForm = (label, event) => {
    switch (label) {
      case "username":
        setSignupForm({ ...signupform, username: event.target.value });
        break;
      case "password":
        setSignupForm({ ...signupform, password: event.target.value });
        break;
    }
  };

  const Signup = async (event) => {
    event.preventDefault();
    console.log(signupform);
    // call api login
    await axios
      .post(
        "http://127.0.0.1:8000/docs#/Users/create_user_user__post",
        signupform
      )
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
        <a href="home">
          <img src="images/logo.png" alt="description of image" />
        </a>
      </div>
      <div className="container" >
        <div className="title">Registration</div>
        <div className="content">
          <form method="POST" onSubmit={Signup}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
