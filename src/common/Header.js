import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import { navbar } from "../data/Data";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navbaropen = () => {
    setToggleNav(!toggleNav);
  };

  const location = useLocation();
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className=" col-md-2 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to={"/"}>
                      <img src="images/logo.png" alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={navbaropen}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`${
                    toggleNav
                      ? "navbar-collapse collapsed"
                      : "collapse navbar-collapse"
                  }`}
                  id="navbarsExample04"
                >
                  <ul className="navbar-nav mr-auto">
                    {navbar.map((val, key) => (
                      <li
                        className={`nav-item ${key === 0 ? "active" : ""}`}
                        key={key}
                      >
                        <Link to={val.path} className="nav-link">
                          {val.nav}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-2">
              <ul className="email text_align_right">
                <li className="d_none">
                  <Link>
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="d_none">
                  <Link>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {location.pathname === "/" && <BannerSlider />}
    </>
  );
};

export default Header;
