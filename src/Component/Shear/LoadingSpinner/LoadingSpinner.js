import React from "react";
import spinner from "../../../Assets/Images/loading-load.gif";

const LoadingSpinner = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <div>
          <img src={spinner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
