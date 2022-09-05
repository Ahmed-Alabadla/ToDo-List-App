import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { hiddenDeleteTaskAction } from "../redux/displaySlice";
const DeleteTask = (props) => {
  const [display, setDisplay] = useState(props.display);

  useEffect(() => {
    setDisplay(props.display);
  }, [props.display]);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hiddenDeleteTaskAction());
  };

  return (
    <div className={`relative z-10 ${display}`}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity"
          id="back"
        ></div>

        <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
          <div className="relative bg-white  rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="p-4 flex justify-between">
              <h3 className="text-xl font-medium">DELETE TASK</h3>
              <button onClick={handleClose}>
                <GrClose />
              </button>
            </div>

            <p className="px-4 pt-5  text-center ">
              Are you sure you want to delete the task
            </p>
            <div className="bg-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mt-3 sm:flex sm:justify-center sm:gap-3">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Delete Task
              </button>
              <button
                onClick={handleClose}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
