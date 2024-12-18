// import React from "react";

import { ReactElement } from "react";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";

const navList = ["home", "contact", "profile", "register"];
export default function Navbar() {
  function handleHamburger() {
    const navMenu = document.querySelector("nav ul");
    navMenu?.classList.toggle("top-[50px]");
  }
  return (
    <div className=" bg-blue-300 py-3">
      <nav className="flex items-center  justify-between w-[90%] mx-auto">
        <div className="text-3xl font-bold">LOGO</div>
        <ul
          className="flex gap-3 p-3 font-semibold max-lg:bg-blue-300  absolute -top-full text-slate-700  text-xl capitalize left-0 right-0 flex-col items-center
         py-5 lg:static lg:flex-row lg:p-0 lg:gap-10 lg:justify-start "
        >
          {navList.map((ele: String, idx) => {
            return (
              <li
                className="hover:text-stone-500 cursor-pointer hover:bg-blue-200 w-full flex justify-center py-2 rounded-md"
                key={idx}
              >
                {ele}
              </li>
            );
          })}
          <button className="bg-blue-600 text-stone-200 px-7 py-2 rounded-full hover:bg-blue-500 hover:text-stone-100">
            sigin
          </button>
        </ul>
        <span onClick={handleHamburger} className="lg:hidden">
          <GiHamburgerMenu className="w-10 h-7 cursor-pointer" />
        </span>
      </nav>
    </div>
  );
}
