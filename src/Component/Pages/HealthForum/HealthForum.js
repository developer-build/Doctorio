import React from "react";
import health from "../../../Assets/Images/health.png";
import CustomizeButton from "../../Shear/customize_button/CustomizeButton";

const HealthForum = () => {
  return (
    <section className="py-20">
      <div
        style={{ backgroundColor: "#E0EEF7" }}
        className="md:w-8/12 mx-auto rounded grid md:grid-cols-2 justify-center items-center px-10"
      >
        <div className="text-center lg:text-left">
          <h4 className="text-xl text-accent mb-1">
            Ask Query To Qualified Doctors
          </h4>
          <h1 className="text-3xl font-bold text-accent mb-5">
            To Get Your Solution
          </h1>
          <p className="text-accent ">
            Lorem ipsum dolor amet consectetur adipisicing elit eiuim sete eiu
            tempor incididunt.
          </p>
          <div className="mt-5">
            <CustomizeButton>Post Your Questions</CustomizeButton>
          </div>
        </div>
        <img className="md:max-w-lg min-h-full " src={health} alt="" />
      </div>

      <div className="md:w-8/12 mt-10 p-10  mx-auto border border-gray-200">
        <h2 className="text-gray-600">Ask Query To Qualified Doctors</h2>
        <div className="mt-5 border-t pt-3">
          <h4 className="text-xl  font-bold text-accent">
            My stool smells extremely foul, almost rancid. What could be wrong?
          </h4>
          <h6 className="mt-1 text-sm text-gray-600">September 12, 2022</h6>
          <p className="mt-3 text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborume Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>
        <div className="mt-5 border-t pt-3">
          <h4 className="text-xl  font-bold text-accent">
            My stool smells extremely foul, almost rancid. What could be wrong?
          </h4>
          <h6 className="mt-1 text-sm text-gray-600">September 12, 2022</h6>
          <p className="mt-3 text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborume Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>
        <div className="mt-5 border-t pt-3">
          <h4 className="text-xl  font-bold text-accent">
            My stool smells extremely foul, almost rancid. What could be wrong?
          </h4>
          <h6 className="mt-1 text-sm text-gray-600">September 12, 2022</h6>
          <p className="mt-3 text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborume Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>
        <div className="mt-5 border-t pt-3">
          <h4 className="text-xl  font-bold text-accent">
            My stool smells extremely foul, almost rancid. What could be wrong?
          </h4>
          <h6 className="mt-1 text-sm text-gray-600">September 12, 2022</h6>
          <p className="mt-3 text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborume Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthForum;
