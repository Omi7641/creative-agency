import React from "react";
import "./Login.css";
import img13 from "../../images/logos/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <a href="/Home">
        <img className="logo1 rounded mx-auto d-block" src={img13} alt="" />
      </a>
      <br />
      <div className="loginBox">
        <br />
        <br />
        <br />
        <h2 className="text-center">Login with</h2>
        <br />
        <button className="googleBtn">Continue with google</button>
        <br />
        <p className="text-center">
          Don't have an account? <Link to="/Register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
