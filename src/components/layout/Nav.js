import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position: "fixed"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Golden View
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/golden-view-the-news-app/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/golden-view-the-news-app/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/golden-view-the-news-app/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/golden-view-the-news-app/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/golden-view-the-news-app/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/golden-view-the-news-app/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/golden-view-the-news-app/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
