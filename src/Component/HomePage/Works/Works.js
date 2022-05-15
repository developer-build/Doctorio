import React, { useEffect, useState } from "react";
import Work from "../Work/Work";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("work.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return (
    <div className="bg-neutral py-10  ">
      <div className="md:w-4/5 mx-auto">
        <div className="text-center p-2 mx-auto md:w-3/4 ">
          <h6 className="text-accent text-lg font-medium mb-1">
            We Made It Simple
          </h6>
          <h2 className=" text-xl lg:text-4xl md:text-2xl mb-5">
            How It <span className="text-secondary">Works?</span>
          </h2>
          <p className="mb-7">
            Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete
            eiusmod tempor incididunt ut labore etnalom dolore magna aliqua
            udiminimate veniam quis norud.
          </p>
        </div>
        <div className="grid gap-5  md:grid-cols-3">
          {works?.map((work) => (
            <Work key={work?._id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
