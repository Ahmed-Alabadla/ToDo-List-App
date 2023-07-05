import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";

import { useDispatch } from "react-redux";
// import { blockUpdateTaskAction } from "../redux/actions/displayActions";
import {
  blockDeleteTaskAction,
  blockUpdateTaskAction,
} from "../redux/displaySlice";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import Task from "./Task";
import Loading from "./Loading";

function Tasks(props) {
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleClickUpdate = () => {
    dispatch(blockUpdateTaskAction());
  };

  const handleClickDelete = () => {
    dispatch(blockDeleteTaskAction());
  };

  return (
    <div className="w-full bg-[#ecedf6] p-5 rounded-lg mt-2 flex flex-col gap-5 ">
      {/* ----------- */}
      <div className="bg-white rounded flex justify-between p-3 ">
        <div className="flex items-center gap-3">
          <input
            onClick={() => setCompleted(!completed)}
            type="checkbox"
            class="w-5 h-5 text-blue-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-400  focus:ring-2 "
          />
          <div className="flex flex-col">
            <p
              className={`${
                completed === true
                  ? "text-[#585858] opacity-70 line-through"
                  : "text-[#585858]"
              } font-medium`}
            >
              Task 1
            </p>
            <small className="text-xs text-gray-500">9:02 AM, 08/29/2022</small>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]"
            onClick={handleClickUpdate}
          >
            <HiPencil size={20} />
          </button>
          <button
            className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]"
            onClick={handleClickDelete}
          >
            <MdDelete size={20} />
          </button>
        </div>
        <UpdateTask display={props.display} />
        <DeleteTask display={props.delete} />
      </div>
      {/* ----------- */}
      <Task />
      <Task />

      {/* -------No task------- */}

      <div className="w-1/2 rounded-full bg-white text-center p-4 mx-auto text-xl">
        No Tasks
      </div>
    </div>
  );
}

export default Tasks;
