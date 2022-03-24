import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <ul className="mainmenu">
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-one"}>Home One</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/Article"}>article</Link>
            </li>
          </ul>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/service"}>
            Service <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
          </ul>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/blog"}>
            News <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog"}>Library</Link>
            </li>
          </ul>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "#/"}>
            Pages <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/merchants"}></Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/team"}>Team Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wallet"}>Wallet Page</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login"}>
                Login / Register
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
