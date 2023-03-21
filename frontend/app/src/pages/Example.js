import React, { useState, useEffect} from 'react';
import axios from 'axios';



function Example() {

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  
    


  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://127.0.0.1:8000/docs#/Authentication/login_login_post', { 'username': username, 'password': password })
      .then(res => console.log(res))
};

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
      <span className="card-text"> 
        <input className="mb-2 form-control titleIn" onChange={event => setUsername(event.target.value)} placeholder='Title'/> 
        <input className="mb-2 form-control desIn" onChange={event => setPassword(event.target.value)}   placeholder='Description'/>
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Task</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
     
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default Example;