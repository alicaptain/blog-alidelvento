import React from "react";

export default function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <label>Email</label>
        <input type="text" placeHolder="Email Address" />
        <label>Password</label>
        <input type="password" />
        <button className="button-login">Log In</button>
      </form>
      <button className="button-getin">Get In</button>
    </div>
  );
}
