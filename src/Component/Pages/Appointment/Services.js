import React from "react";
import AppointmentModal from "./AppointmentModal";

const Services = ({ services, selected }) => {
  const { treatment, slots } = services;
  return (
    <>
      <div className="w-80 mx-auto ">
        <div
          style={{ boxShadow: "0 4px 21px -12px rgba(0, 0, 0, 0.76)" }}
          className=" rounded-lg py-10 bg-white"
        >
          <h2 className="text-primary text-xl">{treatment}</h2>
          <p className="mt-3 text-sm font-medium">{slots[0]}</p>
          <div className="mt-10">
            <label
              for="appointment-modal"
              className=" modal-button border custom_btn text-white rounded bg-primary px-10 py-2.5 text-sm hover:bg-primary hover:text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
      <AppointmentModal services={services} selected={selected} />
    </>
  );
};

export default Services;
