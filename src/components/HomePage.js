import React, { useState } from "react";

import Tasks from "./Tasks";
import NavbarTop from "./NavbarTop";
import AddTask from "./AddTask";

import { useSelector, useDispatch } from "react-redux";

import { blockAddTaskAction } from "../redux/actions/displayActions";

function HomePage() {
  const displayAdd = useSelector((state) => state.displayAddTask);
  const displayUpdate = useSelector((state1) => state1.displayUpdateTask);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(blockAddTaskAction());
  };

  return (
    <>
      <NavbarTop />

      {/* Main Section */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] mx-auto mt-20">
        <h2 className="uppercase font-bold text-3xl text-center mb-10">
          todo list
        </h2>
        <div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleAddTask}
              className="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Add Task
            </button>
            <div className="w-32">
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  w-full">
                <option value="all" selected>
                  All
                </option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <Tasks display={displayUpdate} />
      </div>

      {/* Add Tasks */}
      <AddTask display={displayAdd} />
    </>
  );
}

export default HomePage;