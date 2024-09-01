// import React from 'react';
import './styles.css'; // Link to your CSS file

export const LoginPage = () =>  {
  return (
    <div className="login-position">
      <div className="login-box">
        {/* Login Heading */}
        <div className="login-heading">
          Login
        </div>

        {/* Login Form */}
        <form action="#" method="POST">
          <div className="input-field">
            <input type="text" id="username" name="username" required />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" name="password" required />
            <label htmlFor="password">Password</label>
          </div>

          {/* Forgot Password Link */}
          <div className="cont2">
            <a href="#" className="forgot">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <div className="sign-karo-box">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>

        {/* Error Message (if any) */}
        <div className="error">
          {/* Error message will be shown here if there's any */}
        </div>

        {/* Additional Buttons for Registration or OTP */}
        <div className="upar-vale-buttons">
          <button id="register">Register</button>
          <button id="otp">Get OTP</button>
        </div>
      </div>

      {/* Reset Password Box */}
      <div className="login-box-2">
        <div className="reset-heading">
          Reset Password
        </div>
        <form action="#" method="POST">
          <div className="input-field">
            <input type="email" id="reset-email" name="reset-email" required />
            <label htmlFor="reset-email">Email</label>
          </div>
          <div className="cont2">
            <button type="submit" className="btns">Reset</button>
          </div>
        </form>
      </div>

      {/* Bottom Text (e.g., Register or Login link) */}
      <div className="btm">
        <span id="already-registered">Already registered? <a id="login-link" href="#">Login here</a></span>
      </div>

      {/* Spinner (Optional, e.g., for loading state) */}
      <div className="spinner"></div>
    </div>
  );
};

// export default LoginPage;
