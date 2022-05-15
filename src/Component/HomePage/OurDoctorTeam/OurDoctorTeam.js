import React from "react";
import "./OurDoctorTeam.css";
import doctorTeam from "../../../Assets/Images/doctor-team.png";
import CustomizeButton from "../../Shear/customize_button/CustomizeButton";

const OurDoctorTeam = () => {
  return (
    <div className="lg:w-4/5 flex justify-between  OurDoctorTeam shadow-sm lg:shadow-2xl   mx-auto mb-5 bg-white rounded-xl ">
      <div className=" py-5 md:p-7 text-center lg:text-left  ">
        <h2 className="mb-5 text-xl md:text-2xl text-accent font-bold">
          Seek immediate advice From the best doctors
        </h2>
        <p className="mt-5 text-lg md:text-xl text-gray-500">
          Get started now and register for your appointment and feel safe for
          all your family
        </p>
        <div className="mt-3">
          <CustomizeButton>Go to Appointment</CustomizeButton>
        </div>
      </div>
      <div className="bg-accent m-0 rounded-r-xl">
        <img
          src={doctorTeam}
          className="max-w-lg min-h-full hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurDoctorTeam;
