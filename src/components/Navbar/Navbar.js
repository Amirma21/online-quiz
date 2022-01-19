import "./navbar.css";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import React, { useState } from "react";



const Navbar = ({darkModeBtnHandler , isDark}) => {

  return (
        <div className="navbar">
          <div className="bridgeButton" onClick={darkModeBtnHandler}>
            <BsMoonStarsFill className="icon moon" />
            <BsFillSunFill className="icon" />
            <label
              className={`circleButton  ${isDark && "brigeButtonActive"}`}
            ></label>
          </div>
        </div>
  );
};

export default Navbar;

// "circleButton brigeButtonActive"
