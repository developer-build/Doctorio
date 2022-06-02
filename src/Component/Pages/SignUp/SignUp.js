import React from "react";
import { Link } from "react-router-dom";
import login from "../../../Assets/Images/login.png";
import auth from "../../../FirebaseInit/FirebaseInit";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import LoadingSpinner from "../../Shear/LoadingSpinner/LoadingSpinner";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user);

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
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    event.target.reset();
  };
  return (
    <div className="  my-10">
      <div className="w-11/12 gap-5 mx-auto lg:text-left text-center lg:w-4/5 grid lg:grid-cols-2 justify-center items-center ">
        <div>
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
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
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
                  placeholder="Enter Name"
                />
              </div>
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
                Sign Up
              </button>
              <p className="text-gray-800 mt-6 text-center">
                already have an account?
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Login
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

export default SignUp;
