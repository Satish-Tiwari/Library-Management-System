import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

import createSomeContext from "../../context/auth/createSomeContext";

export default function AdminLogin() {


  const { adminLogin } = useContext(createSomeContext);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCancelClick = () => {
    setUserId("");
    setPassword("");
  };

  const handleLoginClick = async () => {
    console.log("Logging in...");

    const result = await adminLogin(userId, password);
    if (!result.success) {
      alert("Invalid Credientials");
      return;
    }
    else {
      alert("Admin Login Successfull");
      localStorage.setItem('token', result.awthToken);
    }

  };


  return (
    <div className="login-form">
      <h4>Library Management System</h4>
      <h5>Admin Login</h5>
      <form>
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            placeholder="User ID"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>

          {/* If login succes then navigate to admin home page */}
          <button type="button" onClick={handleLoginClick}>
            <Link to="/adminlogin/adminhome">Login</Link>
          </button>
          {/* <button type="button">
            <Link to="/signup">SignUp</Link>
          </button> */}
        </div>
      </form>
    </div>
  );
}
