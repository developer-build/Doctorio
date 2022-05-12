import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomizeButtonOutline from "../customize_button/CustomizeButtonOutline";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div class="navbar lg:w-11/12 mx-auto py-5">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            <h5 className="font-bold  md:text-2xl">
              Doc<span className="text-secondary">torio</span>{" "}
            </h5>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
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

            <li tabindex="0">
              <NavLink className="Link" to="/pages">
                Pages
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul class="p-2 bg-base-100">
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
          </ul>
        </div>
        <div class="navbar-end">
          <CustomizeButtonOutline>Login</CustomizeButtonOutline>
          {/* <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;