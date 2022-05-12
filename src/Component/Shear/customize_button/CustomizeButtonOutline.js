import React from "react";
import "./Button.css";

const CustomizeButtonOutline = ({ children }) => {
  return (
    <button className="border custom_btn rounded border-primary px-14 py-2.5 text-lg hover:bg-primary hover:text-white">
      {children}
    </button>
  );
};

export default CustomizeButtonOutline;
