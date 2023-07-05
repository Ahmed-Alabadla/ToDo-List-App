import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { hiddenAddTaskAction } from "../redux/displaySlice";
// import { hiddenAddTaskAction } from "../redux/actions/displayActions";

// import axios from "axios";

const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hiddenAddTaskAction());
  };

  const [displayAdd, setDisplayAdd] = useState(props.display);
  useEffect(() => {
    setDisplayAdd(props.display);
  }, [props.display]);

  const refTitle = useRef();
  const refDisc = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const data = { title, description, date };
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

  return (
    <>
      <div className={`relative z-10 ${displayAdd}`} id="addTask">
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div
            // onClick={}
            className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity"
            id="back"
          ></div>

          <div className="flex items-center justify-center min-h-full p-4 sm:p-0">
            <div className="relative bg-white dark:bg-slate-700 rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="p-4 flex justify-between">
                <h3 className="text-xl font-medium">ADD TASK</h3>
                <button onClick={handleClose}>
                  <GrClose />
                </button>
              </div>

              <div className="bg-white dark:bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={handleSubmitForm}
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
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue.getDate());
                      }}
                    />
                  </LocalizationProvider>

                  {/* ------------------- */}
                  <div className="bg-gray-50 dark:bg-slate-700 mt-5 sm:flex sm:gap-3">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Add Task
                    </button>
                    {/* <button
                      type="submit"
                      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
                    >
                      <svg
                        role="status"
                        className="inline mr-3 w-[18px] h-[18px] text-gray-100 animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading...
                    </button> */}

                    <button
                      onClick={handleClose}
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
    </>
  );
};

export default AddTask;
