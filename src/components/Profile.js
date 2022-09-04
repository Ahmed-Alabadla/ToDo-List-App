import React, { useEffect, useState } from "react";
import NavbarTop from "./NavbarTop";
import ChangePassword from "./ChangePassword";
import ChangeName from "./ChangeName";
import { useSelector, useDispatch } from "react-redux";
import {
  blockUpdateNameAction,
  blockUpdatePasswordAction,
} from "../redux/displaySlice";
// import {
//   blockUpdateNameAction,
//   blockUpdatePasswordAction,
// } from "../redux/actions/displayActions";

function Profile() {
  const displayName = useSelector(
    // (state) => state.displayReducer.displayUpdateName
    (state) => state.displaySlice.displayUpdateName
  );
  const displayPassword = useSelector(
    // (state) => state.displayReducer.displayUpdatePassword
    (state) => state.displaySlice.displayUpdatePassword
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) {
      const foundUser = JSON.parse(dataUser);
      setName(foundUser.name);
      setEmail(foundUser.email);
    }
  }, []);
  return (
    <>
      <NavbarTop />
      <div className="w-[90%] md:w-[65%] lg:w-[55%] mx-auto flex flex-col gap-10 mt-24">
        <h2 className="text-center text-2xl font-semibold ">Your profile</h2>
        <div className="relative w-full">
          <input
            name="email"
            type="email"
            id="labelEmail"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent"
            value={email}
            disabled
          />
          <label
            for="labelEmail"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-sky-500 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email address
          </label>
        </div>
        <div className="relative flex items-center ">
          <div className="w-full">
            <input
              name="name"
              type="text"
              id="labelName"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent"
              value={name}
              readOnly
            />
            <label
              for="labelName"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-sky-500 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Your Name
            </label>
          </div>

          <button
            onClick={() => dispatch(blockUpdateNameAction())}
            type="button"
            class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none ml-5 sm:ml-10"
          >
            Change
          </button>
          <ChangeName display={displayName} />
        </div>

        <div className="relative flex items-center">
          <div className="w-full">
            <input
              name="password"
              type="text"
              id="labelPassword"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent"
              value="********"
              readOnly
            />
            <label
              for="labelPassword"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-5 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-sky-500 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>
          <button
            onClick={() => dispatch(blockUpdatePasswordAction())}
            type="button"
            class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none ml-5 sm:ml-10"
          >
            Change
          </button>
          <ChangePassword display={displayPassword} />
        </div>
      </div>
    </>
  );
}

export default Profile;
