import React from "react";
import logo from "../Assets/logo.png";
import { MdSearch, MdShoppingBag } from "react-icons/md";
import "../Styles/Styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img id="logo" className="img-fluid" src={logo} alt="logo" />
        </a>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link " to="/cart">
                <h4 className="icons">
                  <MdShoppingBag />{" "}
                </h4>
              </Link>
            </li>
            <li className="nav-item ">
              <div className="nav-link ">
                <h4 className="icons">
                  <MdSearch />
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  items: state.addedItems,
});

export default connect(mapStateToProps)(Navbar);
