import React from "react";
import PPic from "../components/images/IMG_2728.JPG";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-update-title">Update Account</div>
        <div className="settings-delete-title">Delete Account</div>
      </div>

      <form className="settings-form">
        <label>Profile Picture</label>

        <label htmlFor="fileInput">
          <div className="settings-profile-pic">
            <img className="p-pic" src={PPic} alt="profile picture"></img>
          </div>
        </label>
        <input type="file" id="file-input" />
        <label>Taler</label>
        <input type="text" placeholder="Your Name" />
        <label>Email</label>
        <input type="email" placeholder="Your Name" />
        <label>Password</label>
        <input type="password" />
        <button className="settings-submit">Update</button>
      </form>
    </div>
  );
}
