import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignIn = () => {
  // handle Password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = { email, password };
    setUser(dataUser);
    console.log(dataUser);
    console.log(user);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="h-screen   flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mx-auto">
        <div>
          <h2 className="mb-6 text-center text-3xl tracking-tight font-medium text-blue-600 ">
            Welcome
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action=""
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* <input type="hidden" name="remember" value="true" /> */}
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
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
