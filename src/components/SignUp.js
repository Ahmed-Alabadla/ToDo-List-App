import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function SignUp() {
  // const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  // handle Password eye
  const [passwordEye, setPasswordEye] = useState(false);
  const [conPasswordEye, setConPasswordEye] = useState(false);

  // handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // check password event
  const checkPassword = watch("password");

  // handleSubmit
  const onSubmit = (date) => {
    console.log(date);
    const requestOptions = {
      name: date.name,
      email: date.email,
      password: date.password,
    };

    // console.log(requestOptions);
    axios
      .post("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((res) => {
        console.log(res.date);
      });
  };

  return (
    <div className="h-screen   flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mx-auto">
        <div>
          <h2 className="mb-6 text-center text-3xl tracking-tight font-medium text-blue-600 ">
            Get Started
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="remember" value="true" />

          <div className="relative">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="labelName"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                  errors.name &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                {...register("name", {
                  required: "Full name is required",
                })}
              />
              <label
                for="labelName"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                  errors.name && "peer-focus:text-red-500"
                }`}
              >
                Full name
              </label>
            </div>
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

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

          <div className="relative">
            <div className="relative">
              <input
                // name="password"
                name="phone"
                type={passwordEye === false ? "password" : "text"}
                id="labelPassword"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                  errors.password &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must have at most 20 characters",
                  },
                })}
              />
              <label
                for="labelPassword"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                  errors.password && "peer-focus:text-red-500"
                }`}
              >
                Password
              </label>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            {/* eye section */}
            <div className="text-xl absolute top-4 -translate-y-[2px] right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible
                  onClick={() => setPasswordEye(!passwordEye)}
                />
              ) : (
                <AiFillEye onClick={() => setPasswordEye(!passwordEye)} />
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <input
                type={conPasswordEye === false ? "password" : "text"}
                id="labelConPassword"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                  errors.confirmPassword &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                placeholder="********"
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
                onChange={(e) => setConPass(e.target.value)}
                {...register("confirmPassword", {
                  required: "Confirm password is required",

                  minLength: {
                    value: 8,
                    message: "Confirm password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Confirm password must have at most 20 characters",
                  },
                  validate: (value) =>
                    value === checkPassword || "The password do not match",
                })}
              />
              <label
                for="labelConPassword"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                  errors.confirmPassword && "peer-focus:text-red-500"
                }`}
              >
                Confirm password
              </label>
            </div>
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
            {/* eye section */}
            <div className="text-xl absolute top-4 -translate-y-[2px] right-5">
              {conPasswordEye === false ? (
                <AiFillEyeInvisible
                  onClick={() => setConPasswordEye(!conPasswordEye)}
                />
              ) : (
                <AiFillEye onClick={() => setConPasswordEye(!conPasswordEye)} />
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          Already have an account?{" "}
          <span className="text-blue-700">
            <Link to="/">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
