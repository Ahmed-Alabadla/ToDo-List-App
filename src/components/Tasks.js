import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";

import { useDispatch } from "react-redux";
// import { blockUpdateTaskAction } from "../redux/actions/displayActions";
import UpdateTask from "./UpdateTask";
import { blockUpdateTaskAction } from "../redux/displaySlice";

function Tasks(props) {
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleClickUpdate = () => {
    dispatch(blockUpdateTaskAction());
  };

  return (
    <div className="w-full bg-[#ecedf6] p-5 rounded-lg mt-2 flex flex-col gap-5">
      {/* ----------- */}
      <div className="bg-white rounded flex justify-between p-3">
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
        <div className="flex items-center gap-2">
          <button
            className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]"
            onClick={handleClickUpdate}
          >
            <HiPencil size={20} />
          </button>
          <button className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]">
            <MdDelete size={20} />
          </button>
        </div>
        <UpdateTask display={props.display} />
      </div>
      {/* ----------- */}
      {/* <div className="bg-white rounded flex justify-between p-3">
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
        <div className="flex items-center gap-2">
          <button
            className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]"
            onClick={handleClickUpdate}
          >
            <HiPencil size={20} />
          </button>
          <button className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]">
            <MdDelete size={20} />
          </button>
        </div>
        <UpdateTask display={props.display} />
      </div> */}
    </div>
  );
}

export default Tasks;
