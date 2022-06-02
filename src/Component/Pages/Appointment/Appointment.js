import React, { useState } from "react";
import "./appoinment.css";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableServices from "./AvailableServices";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppoinmentBanner selected={selected} setSelected={setSelected} />
      <AvailableServices selected={selected} />
    </div>
  );
};

export default Appointment;
