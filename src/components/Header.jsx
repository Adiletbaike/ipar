import React from "react";
import { Link } from "react-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://iparbio.com/public/images/icon/iparLogo.png"
            alt="LOGO"
            className="w-40"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
