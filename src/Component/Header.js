import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <NavLink to="/">{props.title}</NavLink>
          </h1>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/task1" >Task1</NavLink>
            </li>
            <li>
              <NavLink to="/">Task2</NavLink>
            </li>
            <li>
              <NavLink to="/">Task3</NavLink>
            </li>
            <li>
              <NavLink to="/">Task4</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
