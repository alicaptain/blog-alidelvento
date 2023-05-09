import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function ButtBar() {
  const user = false;
  return (
    <div className="buttbar">
      <div class="menu-left">
        <ul>
          {!user ? (
            <li>
              <Link to="/Login">log in</Link>
            </li>
          ) : (
            <li>
              <Link to="">leave</Link>
            </li>
          )}
          <li>leave</li>
        </ul>
      </div>
      <Link to="/">
        <h3>Ali Del Vento</h3>
      </Link>
      <div class="menu-right">
        <ul>
          <li>
            <Link to={user ? "/WriteTale" : "/GetIn"}>write</Link>
          </li>
          <li>
            <Link to="/Tale">read</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
