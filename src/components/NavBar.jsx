import { useState } from "react";
import { NavLink } from "react-router-dom";
import githubLogo from "../assets/logo/github.png";
import linkedinLogo from "../assets/logo/th.jpg";

import "./NavBar.css";

export default function NavBar() {
  const [isActive] = useState(false);

  return (
    <div className="header">
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line" />
      </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={isActive ? "activeNavContent" : "navContent"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={isActive ? "activeNavContent" : "navContent"}
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={isActive ? "activeNavContent" : "navContent"}
            >
              My projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={isActive ? "activeNavContent" : "navContent"}
            >
              Contact me
            </NavLink>
          </li>
          <div className="logos">
            <a href="https://github.com/LucieChev">
              <img src={githubLogo} alt="github-page" className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/lucie-chev/">
              <img src={linkedinLogo} alt="github-page" className="logo" />
            </a>
          </div>
          4{" "}
        </ul>
      </nav>
    </div>
  );
}
