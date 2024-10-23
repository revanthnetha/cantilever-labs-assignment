import React from "react";
import { logo } from "../assets";
import { menuItems } from "../data/data";

const Appbar = ({children}:any) => {
  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r shadow-md"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <a
            href="#"
            className="flex flex-row items-center justify-center gap-2 mb-10 mt-5"
          >
            <img src={logo} className="h-[28.39px] w-[43.41px]" alt="Logo" />
            <span className="flex justify-center font-sans text-[16.75px] font-bold leading-[20.93px] text-left text-[#0F4264]">
              cloudcash
            </span>
          </a>
          <ul className="font-medium">
            {menuItems.map((item, index) => (
              <li key={index} className="p-2 flex hover:bg-[#F0F7FF] rounded-md hover:text-[#197BBD]">
                <a
                  href={item.link}
                  className="flex  items-center p-2 gap-4   "
                >
                  <img
                    src={item.imgUrl}
                    className="h-[12.43px] w-[18.14px] hover:bg-[#F0F7FF] "
                    alt="image"
                  />
                  <span className="font-sans font-bold md:text-[16px] text-[12px] text-[#C7C7C7] hover:text-[#197BBD] text-left">
                   {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {children}
    </div>
  );
};

export default Appbar;
