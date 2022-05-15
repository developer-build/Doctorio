import React from "react";
import doctor from "../../../Assets/Images/image-woman-doctor-female-healthcare-worker-showing-online-medical-website-digital-tablet-screen-removebg-preview.png";
import apple from "../../../Assets/Icons/app-store.png";
import google from "../../../Assets/Icons/google-play.png";
const DoctorApp = () => {
  return (
    <div className="bg-neutral my-5">
      <div className="md:w-4/5 w-11/12 grid md:grid-cols-2 justify-center items-center mx-auto ">
        <div>
          <img className="md:max-w-lg min-h-full " src={doctor} alt="" />
        </div>
        <div>
          <h1 className="mb-2 text-xl md:text-4xl text-accent md:font-bold">
            Care On The GO
          </h1>
          <h1 className="mb-3 text-xl font-semibold md:text-3xl text-secondary ">
            Download Mobile App
          </h1>
          <p className="mb-5 ">
            Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete
            eiusmod tempor incididunt ut labore etnalom dolore magna aliqua.
          </p>
          <div className="text-center">
            <button className="m-2">
              <img src={google} alt="" />
            </button>
            <button className="m-2">
              <img src={apple} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorApp;
