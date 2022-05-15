import React from "react";
import head from "../../../Assets/Images/head_pain.webp";

const UseDoctorio = () => {
  return (
    <div>
      <div className="  my-20">
        <div className="w-11/12 gap-5 mx-auto md:w-4/5 grid md:grid-cols-2 justify-center items-center ">
          <div>
            <img src={head} alt="" className="md:max-w-lg min-h-full " />
          </div>
          <div className="md:mt-5 md:ml-7">
            <h1 className="mb-5 text-xl md:text-4xl text-accent md:font-bold">
              When to use Doctorio
            </h1>
            <div>
              <h3 className=" mb-2 text-lg md:text-2xl text-accent md:font-bold">
                Common health issue
              </h3>
              <p className="text-gray-500">
                Ask anything you would normally ask your GP. You can have an
                instant video with one of our GPs via a digital consultation
                from anywhere, at any time of day.
              </p>
            </div>
            <div className="mt-4">
              <h3 className=" mb-2 text-lg md:text-2xl text-accent md:font-bold">
                Specialist advice
              </h3>
              <p className="text-gray-500">
                Sometimes it’s helpful to see a specialist when you want. And
                get educational advice, pre- screening, monitoring and
                follow-ups. For maternal and infant health care, chronic
                diseases such as diabetes, or other conditions, DocTime can help
                you to connect with the right specialist doctor and to stay
                healthy. More than 20 different specialities are available on
                DocTime.
              </p>
            </div>
            <div className="mt-4">
              <h3 className=" mb-2 text-lg md:text-2xl text-accent md:font-bold">
                Mental health and wellbeing
              </h3>
              <p className="text-gray-500">
                Ask anything you would normally ask your GP. You can have an
                instant video with one of our GPs via a digital consultation
                from anywhere, at any time of day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseDoctorio;
