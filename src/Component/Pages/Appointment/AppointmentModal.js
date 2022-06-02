import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../FirebaseInit/FirebaseInit";
import LoadingSpinner from "../../Shear/LoadingSpinner/LoadingSpinner";

const AppointmentModal = ({ selected, services }) => {
  const [user, loading] = useAuthState(auth);

  const appointmentHandler = (event) => {
    event.preventDefault();
    const treatment = event.target.treatment.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const date = event.target.date.value;
    const slotsTime = event.target.slotsTime.value;
    const number = event.target.number.value;

    fetch("   https://obscure-cove-15599.herokuapp.com/appointment", {
      method: "POST",
      body: JSON.stringify({
        treatment,
        name,
        email,
        date,
        slotsTime,
        number,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.acknowledged) {
          toast("The  appointment correct addition has been added");
          event.target.reset();
        }
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            for="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-center">
            Please confirm your appointment!
          </h3>
          <div>
            <div className="block p-6 rounded-lg  bg-white max-w-md">
              <form onSubmit={appointmentHandler}>
                <div className="form-group mb-6">
                  <input
                    value={services?.treatment}
                    readOnly
                    disabled
                    name="treatment"
                    type="text"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    disabled
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="date"
                    readOnly
                    disabled
                    value={selected && format(selected, "PP")}
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="date"
                  />
                </div>
                <div className="form-group mb-6">
                  <div class="mb-3">
                    <select
                      name="slotsTime"
                      class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      {services?.slots?.map((slots) => (
                        <option value={slots}>{slots}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group mb-6">
                  <input
                    type="number"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Phone Number"
                    name="number"
                  />
                </div>

                <button
                  type="submit"
                  className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
