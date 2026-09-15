import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import image from "../assets/image.png";

function SignUp() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="signup-page">

      <div className="signup-circle signup-circle-one"></div>
      <div className="signup-circle signup-circle-two"></div>

      <div className="signup-card">

        {/* LEFT SIDE */}
        <div className="signup-travel-section">

          <img
            src={image}
            alt="Travelista Tours"
          />

          <div className="signup-travel-text">
            <h2>Travelista Tours</h2>

            <p>
              Travel is the only purchase that enriches you in ways
              beyond material wealth
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="signup-form-section">

          <h1>Create Account</h1>

          <p className="signup-subtitle">
            Register with your details
          </p>

          <form onSubmit={handleSignup}>

            <div className="signup-input">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="signup-input">
              <label>Email Id</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="signup-input">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="signup-input">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>

            <button
              type="submit"
              className="signup-button"
            >
              SIGN UP
            </button>

          </form>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login">Login Now</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default SignUp;