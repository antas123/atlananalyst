import React from "react";
import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ handleColorChange }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h1>
        {" "}
        <span style={{ color: "blue" }}>A</span>tlan{" "}
        <span style={{ color: "blue" }}>A</span>nalyser
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "30px",
          marginLeft: "30px",
        }}
      >
        <LightModeIcon style={{ marginTop: "5px" }} />
        <Switch {...label} onChange={handleColorChange} />
        <DarkModeIcon style={{ marginTop: "5px" }} />
      </div>
    </div>
  );
};

export default Header;
