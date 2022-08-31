import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { hiddenUpdateTaskAction } from "../redux/actions/displayActions";

function UpdateTask(props) {
  const [displayUpdate, setDisplayUpdate] = useState(props.display);

  useEffect(() => {
    setDisplayUpdate(props.display);
  }, [props.display]);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hiddenUpdateTaskAction());
  };

  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [value, setValue] = useState(new Date());

  const refTitle = useRef();
  const refDisc = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const data = { title, discription, value };
    console.log(data);

    if (!title.length > 0) {
      refTitle.current.focus();
    } else if (!discription.length > 0) {
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
    <div
      className={`relative z-10 ${displayUpdate}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      id="updateTask"
    >
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
              <button onClick={handleClose}>
                <GrClose />
              </button>
            </div>

            <div className="bg-white dark:bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>
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
                    for="discription"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Discription
                    <textarea
                      id="discription"
                      className="resize-none mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      rows={4}
                      placeholder=""
                      required
                      onChange={(e) => setDiscription(e.target.value)}
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
  );
}

export default UpdateTask;
