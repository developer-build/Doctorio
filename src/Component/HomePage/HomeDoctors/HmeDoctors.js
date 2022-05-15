import React, { useEffect, useState } from "react";
import HomeDoctor from "../HomeDoctor/HomeDoctor";

const HmeDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="md:w-4/5 mx-auto  py-10 ">
      <div className="text-center p-2 mx-auto md:w-3/4 ">
        <h6 className="text-accent text-lg font-medium mb-1">
          Meet Our Professionals
        </h6>
        <h2 className=" text-xl lg:text-4xl md:text-2xl mb-5">
          Top Rated <span className="text-secondary">Specialists</span>
        </h2>
        <p className="mb-7">
          Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod
          tempor incididunt ut labore etnalom dolore magna aliqua udiminimate
          veniam quis norud.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
        {doctors.map((doctor) => (
          <HomeDoctor doctor={doctor} key={doctor?._id} />
        ))}
      </div>
    </div>
  );
};

export default HmeDoctors;
