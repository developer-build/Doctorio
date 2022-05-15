import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomizeButtonOutline from "../customize_button/CustomizeButtonOutline";
import "./Header.css";

const Header = () => {
  const menuItems = (
    <ul className="menu menu-horizontal p-0">
      <li>
        <NavLink className="Link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="Link" to="/appointment">
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink className="Link" to="/health-forum">
          Health Forum
        </NavLink>
      </li>
      <li>
        <NavLink className="Link" to="/reviews">
          Reviews
        </NavLink>
      </li>

      <li tabIndex="0" className="dropdown">
        <NavLink className="Link" to="/pages">
          Pages
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </NavLink>
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NavLink className="Link" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <div className="navbar-end">
              <CustomizeButtonOutline>Login</CustomizeButtonOutline>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar lg:w-11/12 mx-auto py-5">
        <div className="  navbar-start ">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <h5 className="font-bold  md:text-2xl">
              Doc<span className="text-secondary">torio</span>{" "}
            </h5>
          </Link>
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="Link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="Link" to="/appointment">
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink className="Link" to="/health-forum">
                  Health Forum
                </NavLink>
              </li>

              <li>
                <NavLink className="Link" to="/reviews">
                  Reviews
                </NavLink>
              </li>

              <li tabIndex="0" className="dropdown">
                <NavLink className="Link" to="/pages">
                  Pages
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </NavLink>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <NavLink className="Link" to="/blogs">
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="Link" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <div className="navbar-end">
                      <CustomizeButtonOutline>Login</CustomizeButtonOutline>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">{menuItems}</div>
      </div>
    </div>
  );
};

export default Header;
