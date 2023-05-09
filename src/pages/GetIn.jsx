import React from "react";

export default function GetIn() {
  return (
    <div className="getin">
      <form className="getin-form">
        <label>Username</label>
        <input type="text" placeHolder="Username" />
        <label>Email</label>
        <input type="text" placeHolder="Email Address" />
        <label>Password</label>
        <input type="password" />
        <button className="button-getin">Get In</button>
      </form>
      <button className="button-getin">Log In</button>
    </div>
  );
}
