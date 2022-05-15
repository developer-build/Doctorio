import React from "react";
import about from "../../../Assets/Images/about-1.png";
import CustomizeButton from "../../Shear/customize_button/CustomizeButton";
import CustomizeButtonOutline from "../../Shear/customize_button/CustomizeButtonOutline";

const HomeAbout = () => {
  return (
    <div className="  my-20">
      <div className="w-11/12 gap-5 mx-auto md:w-4/5 grid md:grid-cols-2 justify-center items-center ">
        <div>
          <img src={about} alt="" className="md:max-w-lg min-h-full " />
        </div>
        <div className="md:mt-5 md:ml-7">
          <h1 className="mb-3 text-xl md:text-4xl text-accent md:font-bold">
            Bring Care to Your
          </h1>
          <h1 className="mb-3 text-xl font-semibold md:text-3xl text-secondary ">
            Home With One Click
          </h1>
          <p className="mb-5 leading-loose">
            Lorem ipsum dolor amet consectetur adipisicing elitiuim sete eiusmod
            tempor incididunt ut labore etnalom dolore magn aiqua udiminimate
            veniam quis norud exercitation ullamco laboris nisi aliquip commodo
            consequat duis aute irure dolor in reprehenderit.
          </p>
          <div className="lg:flex text-center md:text-left items-center">
            <p>
              <CustomizeButton>About</CustomizeButton>
            </p>
            &nbsp; &nbsp;
            <p>
              <CustomizeButtonOutline>Contact</CustomizeButtonOutline>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
