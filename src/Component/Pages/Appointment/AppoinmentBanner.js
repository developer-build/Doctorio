import React from "react";
import chair from "../../../Assets/Images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppoinmentBanner = ({ selected, setSelected }) => {
  return (
    <div>
      <div className="appointment_banner">
        <div className=" grid gap-6 py-5 lg:py-0 lg:gap-0 lg:grid-cols-2 justify-center items-center">
          <div className="w-80 mx-auto  bg-white rounded-lg shadow-2xl">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
            ;
          </div>
          <div>
            <img
              className="md:max-w-lg min-h-full mx-auto "
              src={chair}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
