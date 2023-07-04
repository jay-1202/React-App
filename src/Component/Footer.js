import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div>© 2023 {props.title}. All Rights Reserved</div>
        <div>Designed by {props.design}</div>
      </div>
    </div>
  );
}
