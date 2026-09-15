import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import image from "../assets/image.png";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <div className="page">

      {/* Decorative background */}
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="travel-section">
          <img
            src={image}
            alt="Travelista Tours"
            className="travel-image"
          />

          <div className="travel-overlay">
            <h2>Travelista Tours</h2>

            <p>
              Travel is the only purchase that enriches you in ways
              beyond material wealth
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="form-section">

          <div className="plane">✈</div>

          <h1>Welcome</h1>

          <p className="subtitle">Login with Email</p>

          <form onSubmit={handleLogin}>

            <div className="input-box">
              <label>Email Id</label>

              <div className="input-wrapper">
                <span className="icon">✉</span>

                <input
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="input-box">
              <label>Password</label>

              <div className="input-wrapper">
                <span className="icon">🔒</span>

                <input
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="forgot">
              <a href="#">Forgot your password?</a>
            </div>

            <button className="login-button" type="submit">
              LOGIN
            </button>

          </form>

          <div className="or">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button>G</button>
            <button>f</button>
            <button>●</button>
          </div>

          <p className="register-text">
            Don't have account?{" "}
            <Link to="/signup">Register Now</Link>
          </p>

          
        </div>

      </div>
    </div>
  );
}

export default Login;