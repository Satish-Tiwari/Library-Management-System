import React from 'react';
import CreateSomeContext from './createSomeContext';

function UseSomeContext(props) {

  /* -------------------------------------- Authentication------------------------------------- */

  // user login
  const loginUser = async (email, password) => {
    const userLogin = await fetch('http://localhost:5000/userlogin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const json = await userLogin.json();
    console.log("Hello User login");
    return json;
  }

  // signuser
  const signupUser = async (name, email, password) => {
    const userSignup = await fetch('http://localhost:5000/usersignup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await userSignup.json();
    console.log("hello user signup");
    return json;
  }


  // admin login
  const adminLogin = async (email, password) => {
    const admin = await fetch('http://localhost:5000/adminlogin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const json = await admin.json();
    console.log("hello admin login");
    return json;
  }

  return (
    <CreateSomeContext.Provider
      value={
        {
          loginUser,
          signupUser,
          adminLogin,
        }
      }
    >
      {props.children}
    </CreateSomeContext.Provider>
  )
}

export default UseSomeContext