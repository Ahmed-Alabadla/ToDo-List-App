import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import logo from "../assets/checklist-100.png";
import { FiLogIn } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NavbarTop() {
  // const route = useNavigate(); // /login
  useEffect(() => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) {
      const foundUser = JSON.parse(dataUser);
      setToken(foundUser.token);
    }
  }, []);

  const [token, setToken] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
      //     Accept: "application/json",
      //     "Content-Type": "multipart/form-data",
    },
  };
  const handleClickLogout = (e) => {
    e.preventDefault();

    axios
      .get(`https://tasks-todo-list-api.000webhostapp.com/api/logout`, config)
      .then((res) => console.log(res));

    // localStorage.clear();
  };

  const [name, setName] = useState("");
  useEffect(() => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) {
      const foundUser = JSON.parse(dataUser);
      setName(foundUser.name);
    }
  }, []);

  return (
    <Navbar fluid={true} rounded={true}>
      <div>
        <Link to="/" className="flex items-center">
          <img src={logo} className=" h-6 sm:h-9" alt="Logo" />
          <span className="mt-1 whitespace-nowrap text-xl font-semibold dark:text-white">
            TODO LIST
          </span>
        </Link>
      </div>
      <div className="flex md:order-2">
        <Dropdown inline={false} label={name}>
          <Dropdown.Item>
            <Link to="/profile" className="flex">
              <BsPersonLinesFill size={20} className="mr-3" />
              Profile
            </Link>
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>
            <button onClick={handleClickLogout} className="flex">
              <FiLogIn size={20} className="mr-3" />
              Sign out
            </button>
          </Dropdown.Item>
        </Dropdown>
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link href="/home" active={true}>
          Home
        </Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

export default NavbarTop;
