import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Page2" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
              Page2
            </NavLink>
          </li>
          <li>
            <NavLink to="/Page3" className={({ isActive }) => isActive ? "text-primary font-bold" : ""}>
              Page3
            </NavLink>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
