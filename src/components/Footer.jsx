import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-6 ">
      <div>
        <h2 className="text-xl">Для заказа:</h2>
      </div>
      <div className="flex justify-center my-4">
        <ul className="flex justify-between flex-col md:flex-row w-[45%] leading-7">
          <li>
            <a href="tel:79637754665" className="flex items-center">
              <FaPhoneAlt className="border border-white p-1 text-xl rounded-md mr-2" />{" "}
              +79067754665
            </a>
          </li>
          <li>
            <a href="https://wa.me/79637756665" className="flex items-center">
              <BsWhatsapp className="border border-white p-1 text-xl rounded-md mr-2" />
              +79067756665
            </a>
          </li>
          <li>
            <a href="https://t.me/elya_alimb" className="flex items-center">
              <BsTelegram className="border border-white p-1 text-xl rounded-md mr-2" />
              +79067756665
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
