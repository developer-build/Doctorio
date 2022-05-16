import React from "react";
import { Link } from "react-router-dom";
import login from "../../../Assets/Images/login.png";

const Login = () => {
  return (
    <div className="  my-10">
      <div className="w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center ">
        <div className="order-last text-center mt-10 lg:mt-0 lg:text-left lg:order-first">
          <div
            style={{ boxShadow: "0 6px 23px -14px rgb(0, 0, 0)" }}
            class="block p-6 rounded-lg  bg-white max-w-sm"
          >
            <form>
              <div class="form-group mb-6">
                <label
                  for="exampleInputEmail2"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group mb-6">
                <label
                  for="exampleInputPassword2"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInputPassword2"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div class="flex justify-between items-center mb-6">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Sign in
              </button>
              <p class="text-gray-800 mt-6 text-center">
                Not a member?{" "}
                <Link
                  to="/sign-up"
                  class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div>
          <img src={login} alt="" className="md:max-w-lg min-h-full mx-auto " />
        </div>
      </div>
    </div>
  );
};

export default Login;
