import React from "react";

const CustomizeButton = ({ children }) => {
  return (
    <button className="border custom_btn text-white rounded bg-primary px-14 py-2.5 text-lg hover:bg-primary hover:text-white">
      {children}
    </button>
  );
};

export default CustomizeButton;
