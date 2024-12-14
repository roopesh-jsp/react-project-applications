import React from "react";

const navList: String[] = ["home", "contact", "profile", "register"];
export default function Navbar() {
  return (
    <div className=" bg-blue-300 py-3">
      <nav className="flex items-center  justify-between w-[90%] mx-auto">
        <div className="text-3xl font-bold">LOGO</div>
        <ul className="flex gap-10 p-3 font-semibold text-slate-700 text-xl capitalize">
          {navList.map((ele: String, idx) => {
            return (
              <li className="hover:text-stone-500 cursor-pointer" key={idx}>
                {ele}
              </li>
            );
          })}
        </ul>
        <button className="bg-blue-600 text-stone-200 px-7 py-2 rounded-full hover:bg-blue-500 hover:text-stone-100">
          sigin
        </button>
      </nav>
    </div>
  );
}
