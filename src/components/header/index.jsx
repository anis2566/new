import React from "react";
import { MdAddCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 sticky top-0 left-0">
      <div className=" mx-auto max-w-screen-xl py-2 md:py-4 px-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt="logo"
            className="w-12 sm:w-16 md:w-16 h-12 sm:h-16 md:h-16"
          />
          <div className="hidden sm:block md:block">
            <h1 className="text-2xl text-white font-bold">
              আর্মড পুলিশ ব্যাটালিয়ন স্কাউট গ্রুপ
            </h1>
            <h1 className="text-2xl text-white font-bold">
              Armed Police Battalion Scout Group
            </h1>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex sm:hidden md:hidden items-center justify-center text-white w-8 h-8 rounded-full hover:bg-slate-50 hover:text-black cursor-pointer">
            <GrMenu />
          </div>
          <div className="hidden sm:flex md:flex items-center gap-2">
            <MdAddCall className="h-6 w-6 text-white" />
            <p className="text-white font-bold">01759-481477</p>
          </div>
          <div className="hidden sm:flex md:flex items-center gap-2">
            <CiMail className="h-6 w-6 text-white" />
            <p className="text-white font-bold">apbnscouts@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
