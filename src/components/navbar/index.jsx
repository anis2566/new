import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../../utils";

const Navbar = () => {
  const { pathname } = useLocation();

  const isActive = (path) => {
    return pathname === path;
  };
  return (
    <div className="hidden sm:flex md:flex bg-blue-400 w-full mt-2">
      <div className="mx-auto max-w-screen-xl flex gap-2 px-4">
        {navMenu.map((menu, i) => (
          <Link
            key={i}
            to={menu.path}
            className={`text-white font-bold h-full p-2 hover:bg-blue-500 ${
              isActive(menu.path) ? "bg-blue-500" : ""
            } transition-all duration-300`}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
