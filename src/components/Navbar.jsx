import { useState } from "react";

import { navLinks, logo } from "../constants";
import { FaWindowClose } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // Toggle Menu
  const [toggle, setToggle] = useState(false);

  return (
    // Header container
    <nav className="w-full flex py-6 justify between items-center">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="sm:w-[270px] sm:h-[70px] w-[250px] h-[63px] rounded-tl-lg rounded-br-lg"
      />
      {/* Nav bar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-roboto font-bold cursor-pointer text-[18px] text-slate-600 ${
              index === navLinks.length - 1 ? "mr:0" : "mr-14"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* For mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          onClick={() => setToggle(prev => !prev)}
          className="cursor-pointer text-[30px] text-slate-500"
        >
          {toggle ? <FaWindowClose /> : <AiOutlineMenu />}
        </div>
        {/* If menu is clicked, show nav bar */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gradient-to-r from-cyan-200 to-blue-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-roboto font-normal cursor-pointer text-[18px] text-slate-600 ${
                  index === navLinks.length - 1 ? "mb:0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
