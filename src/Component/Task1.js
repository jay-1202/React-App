import React, { useState } from "react";
import "./Task1.css";

export default function About() {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [color, setColor] = useState();

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="section">
      <div className="container">
        <div className="box">
          <div className="headbox">
            <div className="title">
              <h1>Task-1</h1>
            </div>
            <div className="value">
              <div class="label">
                <label>Height </label>
                <label>Width </label>
                <label>Color </label>
              </div>
              <div class="colon">
                <label>:</label>
                <label>:</label>
                <label>:</label>
              </div>
              <div class="input">
                <input
                  type="number"
                  value={height}
                  onChange={handleHeightChange}
                  placeholder="Enter Height"
                />
                <input
                  type="number"
                  value={width}
                  onChange={handleWidthChange}
                  placeholder="Enter Width"
                />
                <input
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                  placeholder="Enter Color"
                />
              </div>
            </div>
          </div>
          <div className="output">
            <div
              className="hook"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color,
                marginTop: `20px`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
