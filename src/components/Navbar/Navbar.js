import "./navbar.css";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import React, { useState } from "react";



const Navbar = ({darkModeBtnHandler , isDark}) => {

  return (
        <div className="navbar">
          <div className="bridgeButton" onClick={darkModeBtnHandler}>
            <BsFillSunFill className="icon" />
            <BsMoonStarsFill className="icon moon" />
            <label
              className={`circleButton  ${isDark && "brigeButtonActive"}`}
            ></label>
          </div>
        </div>
  );
};

export default Navbar;

// "circleButton brigeButtonActive"
