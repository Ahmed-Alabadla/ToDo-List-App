import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  // handle form events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const route = useNavigate();
  // handleSubmit
  const onSubmit = (data) => {
    console.log(data);
    const requestOptions = {};

    console.log(requestOptions);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white w-[448px] max-w-md  shadow-lg rounded-xl m-10">
        <button
          className="flex items-center gap-1 mt-3 mx-3"
          onClick={() => route("/login")}
        >
          <IoIosArrowBack />
          Back
        </button>
        <h2 className="text-2xl font-semibold text-center mt-4 mx-2">
          Forgot Password
        </h2>
        <form
          method="POST"
          className="mt-5 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <div className="relative">
              <input
                type="email"
                name="email"
                id="labelEmail"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                  errors.email &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/gm,
                    message: "Invalid email",
                  },
                })}
              />
              <label
                for="labelEmail"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                  errors.email && "peer-focus:text-red-500"
                }`}
              >
                Email
              </label>
            </div>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center mt-7 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
