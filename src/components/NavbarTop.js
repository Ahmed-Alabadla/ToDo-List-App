import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import logo from "../assets/checklist-100.png";
import { FiLogIn } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavbarTop() {
  return (
    <Navbar fluid={true} rounded={true}>
      <div>
        <Link to="/home" className="flex items-center">
          <img src={logo} className=" h-6 sm:h-9" alt="Logo" />
          <span className="mt-1 whitespace-nowrap text-xl font-semibold dark:text-white">
            TODO LIST
          </span>
        </Link>
      </div>
      <div className="flex md:order-2">
        <Dropdown inline={false} label={"Mohammed Ahmed"}>
          <Dropdown.Item>
            <Link to="/profile" className="flex">
              <BsPersonLinesFill size={20} className="mr-3" />
              Profile
            </Link>
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/" className="flex">
              <FiLogIn size={20} className="mr-3" />
              Sign out
            </Link>
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
