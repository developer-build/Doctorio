import React from "react";
import "./HomeDoctor.css";

const HomeDoctor = ({ doctor }) => {
  const { img, treatment, education, name, location, Feedback } = doctor;
  return (
    <div>
      <div className="doctor_card">
        <div className="doctor_img">
          <img src={img} alt="" />
          <div className="love">
            <span>
              <i class="fa-solid fa-heart"></i>
            </span>
          </div>
        </div>
        <div className="p-5">
          <h6 className="text-primary text-lg font-medium ">{treatment}</h6>
          <h3 className="text-md font-medium">
            {name}{" "}
            <span className="pl-1">
              <i
                style={{ color: "#1ABCAB" }}
                className="fa-solid fa-circle-check "
              ></i>
            </span>
          </h3>
          <h6 className=" pt-1 text-sm text-gray-500">{education}</h6>
          <p className="mt-1">
            {Feedback.length <= 2 ? (
              <span className="mr-2 text-sm text-yellow-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </span>
            ) : (
              <span className="mr-2 text-sm text-yellow-400">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
            )}
            <span className="text-sm text-gray-500">
              {Feedback.length} Feedback
            </span>
          </p>
          <p className="pt-3 text-sm text-gray-500">
            <i class="fa-solid fa-location-dot mr-2"></i>
            {location}
          </p>
          <p className="mt-1 font-medium " style={{ color: "#1ABCAB" }}>
            <i class="fa-brands fa-creative-commons-by text-gray-500"></i>{" "}
            Available Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctor;
