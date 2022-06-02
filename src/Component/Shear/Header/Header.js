import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomizeButton from "../customize_button/CustomizeButton";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  const menuItems = (
    <>
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
        <NavLink className="Link" to="/articles">
          Articles
        </NavLink>
      </li>

      <li tabIndex="0" className="dropdown">
        <NavLink className="Link" to="/">
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
        </ul>
      </li>
      <li>
        {user ? (
          <button
            className="border custom_btn rounded border-primary px-14 py-2.5 text-lg hover:bg-primary hover:text-white"
            onClick={() => signOut(auth)}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <CustomizeButton>Login</CustomizeButton>
          </Link>
        )}
      </li>
    </>
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
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end lg:flex w-full hidden  ">
          <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
