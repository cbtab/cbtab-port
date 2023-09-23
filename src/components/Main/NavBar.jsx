import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav-bar">
      <ul>
        <li className="link">
          <Link
            smooth
            to="#header"
            onClick={() => handleLinkClick("header")}
            className={activeLink === "header" ? "active" : ""}
          >
            Home
          </Link>
        </li>

        <li className="link">
          <Link
            smooth
            to="#projects"
            onClick={() => handleLinkClick("projects")}
            className={activeLink === "projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li className="link">
          <Link
            smooth
            to="#about"
            onClick={() => handleLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
