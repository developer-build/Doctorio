import React from "react";
import "./work.css";

const Work = ({ work }) => {
  console.log(work);
  const { img, name, type } = work;
  return (
    <div className="work text-center">
      <div className="img-work">
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="mt-10">
        <h6 className="text-lg">{type}</h6>
        <h2 className="md:text-2xl">{name}</h2>
      </div>
    </div>
  );
};

export default Work;
