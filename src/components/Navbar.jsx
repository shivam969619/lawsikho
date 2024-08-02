import React from "react";
import { navitems } from "../constants";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import icon from "../assets/icon.png";
import hambour from "../assets/hambour.png";

const Navbar = () => {
  return (
    <div className="h-[70px] w-full flex justify-between items-center">
      <div className="sm:pl-[10px] md:ml-[6px] lg:ml-[12px]">
        <img
          src={logo}
          alt="Logo"
          className="lg:h-[50px] lg:w-[200px] md:h-[35px] md:w-[150px] sm:h-[25px] sm:w-[125px] h-[25px] w-[100px] flex-shrink-0 pl-2"
        />
      </div>
      <div className="flex items-center">
        {navitems.map((item) => (
          <div
            key={item}
            className="hidden lg:block md:ml-2 mr-2 hover:text-navtext font-normal"
          >
            {item}
          </div>
        ))}
        <div className="flex items-center">
          <img
            src={phone}
            alt="Phone"
            className="h-[30px] w-[30px] ml-2 mr-2"
          />
          <div className="hidden md:block ml-2 mr-2 text-red-500">
            +919696197104
          </div>
          <div className="h-[38px] w-[178px] bg-red-400 p-[1px] rounded-md mr-3 ml-2 hidden md:block">
            <div className="h-full w-full bg-white flex items-center justify-center rounded-md">
              Request a Call back
            </div>
          </div>
          <div className="h-[40px] w-[40px] p-[1px] rounded-full bg-black mr-4">
            <div className="h-full w-full flex items-center justify-center bg-white rounded-full">
              <img src={icon} alt="Icon" className="h-[30px] w-[30px]" />
            </div>
          </div>
          <div>
            <img
              src={hambour}
              alt=""
              className="h-[30px] w-[30px] mr-2 md:hidden block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
