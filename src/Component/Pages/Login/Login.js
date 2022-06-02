import React from "react";
import { Link } from "react-router-dom";
import login from "../../../Assets/Images/login.png";
import auth from "../../../FirebaseInit/FirebaseInit";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import LoadingSpinner from "../../Shear/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  let errorMessage;
  if (error) {
    errorMessage = error?.message;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const checkbox = event.target.checkbox.checked;
    const password = event.target.password.value;

    if (checkbox) {
      signInWithEmailAndPassword(email, password);
      event.target.reset();
    } else {
      toast("Please click on Remember Me!");
    }
  };
  return (
    <div className="  my-10">
      <div className="w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center ">
        <div className="order-last text-center mt-10 lg:mt-0 lg:text-left lg:order-first">
          <div
            style={{ boxShadow: "0 6px 23px -14px rgb(0, 0, 0)" }}
            className="block p-6 rounded-lg  bg-white max-w-sm"
          >
            <form onSubmit={submitHandler}>
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Email address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="form-control
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
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputPassword2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  className="form-control block
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
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                    name="checkbox"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <p className="py-3 text-center text-red-600">{errorMessage}</p>
              <button
                type="submit"
                className="
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
              <p className="text-gray-800 mt-6 text-center">
                Not a member?{" "}
                <Link
                  to="/sign-up"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
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
