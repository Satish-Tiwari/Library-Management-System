import React, { useState, useContext } from "react";
import "./Signup.css";

import createSomeContext from "../../context/auth/createSomeContext";

export default function Signup() {

  const {signupUser} = useContext(createSomeContext);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleCancel = ()=>{
  setName('');
  setEmail('');
  setPassword('');
  setConfirmPassword('');
}

const handleSubmit = async(event) => {
  event.preventDefault();
  const result = await signupUser(name,email,password);

  if(!result.success){
    alert(result.errors[0].msg);
    return;
  }
  else{
    localStorage.setItem('token', result.awthToken);
        alert("Signup Successfull.");
  }
};

return (
  <form className="signup-form" onSubmit={handleSubmit}>
    <div className="heading-signup">
      <h5>USER SIGNUP PAGE</h5>
    </div>
    <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      required
    />
    </div>
   
<div className="form-group">
<label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      required
    />
</div>
   
  <div className="form-group">
  <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      required
    />
  </div>
  
  <div className="form-group">
  <label htmlFor="confirm-password">Confirm Password:</label>
    <input
      type="password"
      id="confirm-password"
      value={confirmPassword}
      onChange={(event) => setConfirmPassword(event.target.value)}
      required
    />
  </div>
  
    <div className="button-group">
      <button type="button" className="cancel-button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit" className="signup-button">
        Sign Up
      </button>
    </div>
  </form>
);
}
