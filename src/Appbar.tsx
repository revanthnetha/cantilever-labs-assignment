import { useEffect, useRef, useState } from "react";
import { logo, premium, premiumicon, mail, admin, bell } from "./assets";
import { menuItems } from "./data/data";
import Button from "./components/Button";

const Appbar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex items-center justify-between p-4 ">
        <button
          onClick={toggleSidebar}
          aria-controls="logo-sidebar"
          type="button"
          className="z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <div className="md:block"></div>

        <div className="flex items-center space-x-2">
          <img
            src={mail}
            alt="mail"
            className="w-[24px] h-[24px] mr-2 hover:cursor-pointer"
          />
          <img
            src={bell}
            alt="notification"
            className="w-[24px] h-[24px] mr-2 hover:cursor-pointer"
          />
          <img
            src={admin}
            alt="admin"
            className="bg-[#FFC145] w-[24px] h-[24px] rounded-full mr-2 hover:cursor-pointer"
          />
          <div className="flex flex-col items-start">
            <div className="font-semibold text-[14px] font-suprema text-[#404040]">
              Andrew
            </div>
            <div className="text-[14px] font-normal text-[#AEAEAE]">
              Admin account
            </div>
          </div>
        </div>
      </div>

      <aside
        id="logo-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 border-r shadow-md bg-slate-100 md:bg-white overflow-y-auto`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-screen">
          <div
            className={`h-full px-3 py-4 overflow-y-auto flex flex-col justify-between ${
              isOpen ? "mt-[28px]" : ""
            }`}
          >
            <div>
              <a
                href="#"
                className="flex flex-row items-center ml-2 gap-2 mb-10 mt-5"
              >
                <img
                  src={logo}
                  className="h-[28.39px] w-[43.41px]"
                  alt="Logo"
                />
                <span className="flex justify-center font-sans text-[16.75px] font-bold leading-[20.93px] text-left text-[#0F4264]">
                  cloudcash
                </span>
              </a>

              <ul className="font-medium">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 flex hover:bg-[#F0F7FF] rounded-md hover:text-[#197BBD] group hover:cursor-pointer"
                  >
                    <a
                      href={item.link}
                      className="flex items-center p-2 gap-4 hover:text-[#197BBD]"
                    >
                      <img
                        src={item.imgUrl}
                        className="h-[12.43px] w-[18.14px] group-hover:filter group-hover:brightness-0 group-hover:invert"
                        alt={item.name}
                      />
                      <span className="font-sans font-bold md:text-[16px] text-[12px] text-[#C7C7C7]  group-hover:text-[#197BBD] text-left">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center mb-4 mt-auto">
              <img src={premium} alt="Premium" />
              <div className="text-[8px] text-center text-[#404040] w-[103.76px] font-semibold mb-1">
                Give your money awesome space in cloud
              </div>
              <div>
                <Button name="Upgrade to premium" icon={premiumicon} />
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div>{children}</div>
    </div>
  );
};

export default Appbar;
