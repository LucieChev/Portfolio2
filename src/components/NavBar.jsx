import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  const [isActive] = useState(false);
  function closeHamb() {
    isActive(false);
  }

  return (
    <div className="header">
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line" />
      </label>
      <nav className="nav">
        <ul className="menu">
          <div>
            <li>
              <NavLink
                to="/"
                className={isActive ? "activeNavContent" : "navContent"}
                onClick={() => closeHamb()}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={isActive ? "activeNavContent" : "navContent"}
                onClick={() => closeHamb()}
              >
                About me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={isActive ? "activeNavContent" : "navContent"}
                onClick={() => closeHamb()}
              >
                My projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={isActive ? "activeNavContent" : "navContent"}
                onClick={() => closeHamb()}
              >
                Contact me
              </NavLink>
            </li>

            <div className="logos">
              <div className="logo">
                <a href="https://github.com/LucieChev">
                  <FaGithub onClick={() => closeHamb()} />
                </a>
              </div>
              <div className="logo">
                <a href="https://www.linkedin.com/in/lucie-chev/">
                  <FaLinkedin onClick={() => closeHamb()} />
                </a>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
