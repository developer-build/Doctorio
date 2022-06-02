import React from "react";
import CustomizeButton from "../../Shear/customize_button/CustomizeButton";
import doctor from "../../../Assets/Images/doctor_hand_on_phone.webp";

const JointOurTeam = () => {
  return (
    <div className="bg-neutral">
      <div className="md:w-4/5 w-11/12 grid lg:grid-cols-2 justify-center items-center mx-auto pt-10">
        <div className="order-last text-center mt-10 lg:mt-0 lg:text-left lg:order-first">
          <h1 className="mb-2 text-xl md:text-3xl text-accent font-bold">
            Are you
          </h1>
          <h1 className="mb-3 text-xl md:text-3xl text-accent font-bold">
            a qualified Doctor?
          </h1>
          <h5 className="text-xl text-accent font-bold mb-7">
            Join the forefront of digital healthcare
          </h5>
          <p className="text-gray-500 mb-7">
            Join Doctorio network and create your virtual chamber provide
            medical consultancy via video call and expand the reach of your
            service.
          </p>
          <p className="mb-3 font-medium">Enroll yourself just in minutes!</p>
          <div>
            <CustomizeButton>Sign Up Now</CustomizeButton>
          </div>
        </div>
        <div>
          <img className="md:max-w-lg min-h-full " src={doctor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JointOurTeam;
