import React from "react";
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import PaymentPage from "./pages/PaymentPage";
import Example from "./pages/Example"
import CustomerProfile from "./pages/CustomerProfile";


function App(){
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/product" element = {<Product/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/payment" element = {<PaymentPage/>}/>
        <Route path="/example" element = {<Example/>}/>
        <Route path="/profile" element = {<CustomerProfile/>}/>

      </Routes>
    </div>
  )
}

export default App;
