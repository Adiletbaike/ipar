import React from "react";
import { Link } from "react-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-transparent">
      <div className="container mx-auto flex flex-wrap justify-center p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium  items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://iparbio.com/public/images/icon/iparLogo.png"
            alt="LOGO"
            className="w-40 md:h-0 md:ml-10 visible md:hidden"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
