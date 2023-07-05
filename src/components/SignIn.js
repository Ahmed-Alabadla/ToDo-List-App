import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import setAuthHeader from "../utils/setAuthHeader";
import { useDispatch } from "react-redux";
import { newName, newPassword } from "../redux/userSlice";

const SignIn = () => {
  // handle Password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataUser = { email, password };
    console.log(dataUser);

    axios
      .post(
        "https://tasks-todo-list-api.000webhostapp.com/api/login",
        dataUser,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          // setAuthHeader(res.data.data.token);
          dispatch(newName(res.data.data.name));
          dispatch(newPassword(res.data.data.password));
          setSuccess(true);
          route("/");
        }
        if (res.data.code === 400) {
          setSuccess(false);
          setAlertMessage(res.data.messgae);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  // -----------------
  const route = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);

      route("/");
    }
  }, []);

  return (
    <div className="h-screen   flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mx-auto">
        <div>
          <h2 className="mb-6 text-center text-3xl tracking-tight font-medium text-blue-600 ">
            Welcome
          </h2>
          {/* ----------------------- */}
          {!success && (
            <div
              className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Failed!</span> {alertMessage}
              </div>
            </div>
          )}
        </div>
        <form
          className="mt-8 space-y-6"
          action=""
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              name="email"
              type="email"
              id="labelEmail"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent"
              placeholder="name@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="labelEmail"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-sky-500 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Email address
            </label>
          </div>

          <div className="relative">
            <div className="relative">
              <input
                name="password"
                type={passwordEye === false ? "password" : "text"}
                minLength={8}
                id="labelPassword"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent"
                placeholder="*********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                for="labelPassword"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-sky-500 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Password
              </label>
            </div>
            {/* eye section */}
            <div className="text-xl absolute top-1/2 -translate-y-1/2 right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible
                  onClick={() => setPasswordEye(!passwordEye)}
                />
              ) : (
                <AiFillEye onClick={() => setPasswordEye(!passwordEye)} />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                for="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgotpassword"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Forgot your password?{" "}
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          Don't have an account?{" "}
          <span className="text-blue-700">
            <Link to="/register">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
