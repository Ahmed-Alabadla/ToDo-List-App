import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { GrClose } from "react-icons/gr";

const Task = () => {
  const [completed, setCompleted] = useState(false);

  // ------------ Update Task ------------
  const [displayUpdate, setDisplayUpdate] = useState("hidden");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(new Date());

  const refTitle = useRef();
  const refDisc = useRef();

  const handleSubmitFormUpdate = (e) => {
    e.preventDefault();

    const data = { title, description, value };
    console.log(data);

    if (!title.length > 0) {
      refTitle.current.focus();
    } else if (!description.length > 0) {
      refDisc.current.focus();
    } else {
      // axios
      //   .post("https://jsonplaceholder.typicode.com/users", data)
      //   .then((res) => {
      //     console.log(res.data);
      //   });
    }
  };

  // ------------ Delete Task ------------
  const [displayDelete, setDisplayDelete] = useState("hidden");

  return (
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
            Task 2
          </p>
          <small className="text-xs text-gray-500">9:02 AM, 08/29/2022</small>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]"
          onClick={() => setDisplayUpdate("block")}
        >
          <HiPencil size={20} />
        </button>
        <button
          className=" bg-[#eee] rounded p-1 transition-all duration-300 hover:bg-[#dedfe1]"
          onClick={() => setDisplayDelete("block")}
        >
          <MdDelete size={20} />
        </button>
      </div>
      {/* --------------- Update Task --------------- */}

      <div className={`relative z-10 ${displayUpdate}`}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div
            // onClick={}
            className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity"
            id="back"
          ></div>

          <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
            <div className="relative bg-white dark:bg-slate-700 rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="p-4 flex justify-between">
                <h3 className="text-xl font-medium">UPDATE TASK</h3>
                <button onClick={() => setDisplayUpdate("hidden")}>
                  <GrClose />
                </button>
              </div>

              <div className="bg-white dark:bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={handleSubmitFormUpdate}
                >
                  <div>
                    <label
                      for="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Title
                      <input
                        type="text"
                        id="title"
                        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        ref={refTitle}
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      for="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Description
                      <textarea
                        id="description"
                        className="resize-none mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        rows={4}
                        placeholder=""
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        ref={refDisc}
                      />
                    </label>
                  </div>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="DateTimePicker"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </LocalizationProvider>

                  {/* ------------------- */}
                  <div className="bg-gray-50 dark:bg-slate-700 mt-5 sm:flex sm:gap-3">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Update Task
                    </button>
                    <button
                      onClick={() => setDisplayUpdate("hidden")}
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- Delete Task --------------- */}
      <div className={`relative z-10 ${displayDelete}`}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity"
            id="back"
          ></div>

          <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
            <div className="relative bg-white  rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="p-4 flex justify-between">
                <h3 className="text-xl font-medium">DELETE TASK</h3>
                <button onClick={() => setDisplayDelete("hidden")}>
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
                  onClick={() => setDisplayDelete("hidden")}
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
    </div>
  );
};

export default Task;
