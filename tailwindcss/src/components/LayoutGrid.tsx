import React from "react";

export default function LayoutGrid() {
  return (
    <div>
      {/* one  */}

      {/* <div className="grid gap-4 sm:grid-cols-3 m-3">
        <div className=" min-h-[100px] bg-purple-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-orange-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-teal-500 rounded-md shadow-xl"></div>
      </div> */}

      {/* two  */}
      {/* <div className="grid gap-4 sm:grid-cols-3 m-3 grid-cols-2">
        <div className=" min-h-[100px] bg-purple-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-orange-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-teal-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-purple-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-orange-500 rounded-md shadow-xl"></div>
        <div className=" min-h-[100px] bg-teal-500 rounded-md shadow-xl"></div>
      </div> */}

      {/* three  */}

      {/* <div className="grid gap-4 sm:grid-cols-12 m-3 ">
        <div className=" min-h-[100px] bg-purple-500 rounded-md shadow-xl sm:col-span-3 "></div>
        <div className=" min-h-[100px] bg-orange-500 rounded-md shadow-xl sm:col-span-7"></div>
        <div className=" min-h-[100px] bg-teal-500 rounded-md shadow-xl sm:col-span-2"></div>
      </div> */}

      {/* four */}
      <div className="grid gap-4 sm:grid-cols-12 m-3 ">
        <div className=" min-h-[100px] bg-purple-500 rounded-md shadow-xl sm:col-span-2 sm:block hidden "></div>
        <div className=" min-h-[100px] bg-orange-500 rounded-md shadow-xl sm:col-span-8"></div>
        <div className=" min-h-[100px] bg-teal-500 rounded-md shadow-xl sm:col-span-2 sm:block hidden"></div>
      </div>
    </div>
  );
}
