import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Services from "./Services";

const AvailableServices = ({ selected }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="my-10 md:w-4/5 mx-auto text-center ">
        <h2 className="text-center text-xl text-primary ">
          Available Services on {selected && format(selected, "PP")}
        </h2>
        <h6 className="text-center mt-2 text-gray-500 mb-7">
          Please select a service.
        </h6>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Services
              selected={selected}
              key={service._id}
              services={service}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableServices;
