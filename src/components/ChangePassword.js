import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { hiddenUpdatePasswordAction } from "../redux/displaySlice";
// import { hiddenUpdatePasswordAction } from "../redux/actions/displayActions";

function ChangePassword(props) {
  // handle Password eye
  const [oldPasswordEye, setOldPasswordEye] = useState(false);
  const [newPasswordEye, setNewPasswordEye] = useState(false);
  const [conNewPasswordEye, setConNewPasswordEye] = useState(false);

  const [display, setDisplay] = useState(props.display);
  const dispatch = useDispatch();
  useEffect(() => {
    setDisplay(props.display);
  }, [props.display]);

  const handleClose = () => {
    dispatch(hiddenUpdatePasswordAction());
  };

  // const [user, setUser] = useState({});
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // check password event
  const checkPassword = watch("newPassword");
  const checkOldPassword = "111111112";

  // handleSubmit
  const onSubmit = (data) => {
    console.log(data);
    const requestOptions = {};

    console.log(requestOptions);
  };

  return (
    <div
      className={`relative z-10 ${display}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
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
              <h3 className="text-xl font-medium">CHANGE PASSWORD</h3>
              <button onClick={handleClose}>
                <GrClose />
              </button>
            </div>

            <div className="bg-white dark:bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
              >
                <div className="relative">
                  <div className="relative">
                    <input
                      name="password"
                      type={oldPasswordEye === false ? "password" : "text"}
                      id="labelOldPassword"
                      className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                        errors.oldPassword &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      placeholder="********"
                      // onChange={(e) => setPassword(e.target.value)}

                      {...register("oldPassword", {
                        required: "Old password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Old password must have at least 8 characters",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "Old password must have at most 20 characters",
                        },
                        validate: (value) =>
                          value === checkOldPassword ||
                          "The password do not match",
                      })}
                    />
                    <label
                      for="labelOldPassword"
                      className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                        errors.oldPassword && "peer-focus:text-red-500"
                      }`}
                    >
                      Old password
                    </label>
                  </div>
                  {errors.oldPassword && (
                    <span className="text-sm text-red-500">
                      {errors.oldPassword.message}
                    </span>
                  )}
                  {/* eye section */}
                  <div className="text-xl absolute top-4 -translate-y-[2px] right-5">
                    {oldPasswordEye === false ? (
                      <AiFillEyeInvisible
                        onClick={() => setOldPasswordEye(!oldPasswordEye)}
                      />
                    ) : (
                      <AiFillEye
                        onClick={() => setOldPasswordEye(!oldPasswordEye)}
                      />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="relative">
                    <input
                      name="password"
                      type={newPasswordEye === false ? "password" : "text"}
                      id="labelNewPassword"
                      className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                        errors.newPassword &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      placeholder="********"
                      // onChange={(e) => setPassword(e.target.value)}

                      {...register("newPassword", {
                        required: "New password is required",
                        minLength: {
                          value: 8,
                          message:
                            "New password must have at least 8 characters",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "New password must have at most 20 characters",
                        },
                      })}
                    />
                    <label
                      for="labelNewPassword"
                      className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                        errors.newPassword && "peer-focus:text-red-500"
                      }`}
                    >
                      New password
                    </label>
                  </div>
                  {errors.newPassword && (
                    <span className="text-sm text-red-500">
                      {errors.newPassword.message}
                    </span>
                  )}
                  {/* eye section */}
                  <div className="text-xl absolute top-4 -translate-y-[2px] right-5">
                    {newPasswordEye === false ? (
                      <AiFillEyeInvisible
                        onClick={() => setNewPasswordEye(!newPasswordEye)}
                      />
                    ) : (
                      <AiFillEye
                        onClick={() => setNewPasswordEye(!newPasswordEye)}
                      />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className="relative">
                    <input
                      type={conNewPasswordEye === false ? "password" : "text"}
                      id="labelConPassword"
                      className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer focus:placeholder:text-slate-400 placeholder:text-transparent ${
                        errors.confirmNewPassword &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      placeholder="********"
                      onPaste={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                      {...register("confirmNewPassword", {
                        required: "Confirm New password is required",

                        minLength: {
                          value: 8,
                          message:
                            "Confirm New password must have at least 8 characters",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "Confirm New password must have at most 20 characters",
                        },
                        validate: (value) =>
                          value === checkPassword ||
                          "The new password do not match",
                      })}
                    />
                    <label
                      for="labelConPassword"
                      className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-sky-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                        errors.confirmNewPassword && "peer-focus:text-red-500"
                      }`}
                    >
                      Confirm new password
                    </label>
                  </div>
                  {errors.confirmNewPassword && (
                    <span className="text-sm text-red-500">
                      {errors.confirmNewPassword.message}
                    </span>
                  )}
                  {/* eye section */}
                  <div className="text-xl absolute top-4 -translate-y-[2px] right-5">
                    {conNewPasswordEye === false ? (
                      <AiFillEyeInvisible
                        onClick={() => setConNewPasswordEye(!conNewPasswordEye)}
                      />
                    ) : (
                      <AiFillEye
                        onClick={() => setConNewPasswordEye(!conNewPasswordEye)}
                      />
                    )}
                  </div>
                </div>
                {/* ------------------- */}
                <div className="bg-gray-50 mt-1 sm:flex sm:gap-3">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Change password
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

export default ChangePassword;
